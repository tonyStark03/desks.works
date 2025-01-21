"use client";

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Editor } from '@tiptap/react';
import { Upload } from 'lucide-react';

interface ImageUploaderProps {
  editor: Editor | null;
}

export function ImageUploader({ editor }: ImageUploaderProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const dataUrl = reader.result as string;
          if (editor) {
            editor.chain().focus().setImage({ src: dataUrl }).run();
          }
        };
        reader.readAsDataURL(file);
      });
    },
    [editor]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
    },
    multiple: true,
  });

  return (
    <div
      {...getRootProps()}
      className={`mt-4 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
        isDragActive ? 'border-primary bg-primary/5' : 'border-muted'
      }`}
    >
      <input {...getInputProps()} />
      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
      <p className="text-sm text-muted-foreground">
        {isDragActive
          ? 'Drop images here...'
          : 'Drag & drop images here, or click to select files'}
      </p>
    </div>
  );
}