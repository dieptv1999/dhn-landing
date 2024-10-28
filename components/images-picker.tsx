import React, {useCallback} from "react";
import {useDropzone} from "react-dropzone";
import filter from "lodash.filter";
import {CircleX, Upload} from "lucide-react";

export default function ImagesPicker({value, onChange, multiple = true}: {
  value: (File | string)[],
  onChange: (file: (File | string)[]) => void,
  multiple?: boolean
}) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onChange([...(value ?? []), ...(acceptedFiles ?? [])])
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    multiple: multiple,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'image/gif': ['.gif'],
      'image/webp': ['.webp'],
    },
    onDrop,
  })

  return <div>
    <div {...getRootProps()} className={'flex flex-col items-center space-y-3'}>
      <input {...getInputProps()} />
      <div className={'aspect-video max-w-[300px] rounded-full'}>
        <div
          className={'flex flex-col space-y-1 rounded-lg bg-green-600/10 hover:bg-green-600/30 items-center justify-center py-2 text-green-600' +
            'w-full aspect-video max-w-[300px] px-3 border-dashed border border-3 border-gray-300'}>
          <Upload size={28}/>
          <div className={'text-center'}>
            <span>Bấm để chọn ảnh tải lên</span>
            <span className={'text-gray-600'}>hoặc kéo thả ảnh vào đây</span>
          </div>
        </div>
      </div>
      <em className={'text-xs text-center'}>Chấp nhận các định dạng ảnh sau .jpg, .jpeg, .png and .webp.</em>

      {value && value.length > 0 ?
        <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'}>
          {value.map((image, index) => (
            <div
                key={index}
              className={'w-full aspect-video max-w-[300px] rounded-lg relative'}>
              <img
                  key={(typeof image === 'string') ? image : image.name} alt="preview image"
                  src={(typeof image === 'string') ? image : URL.createObjectURL(image)}
                   className={'object-cover h-full w-full rounded-lg'}/>
              <div>
                <div
                  className={'absolute text-red-500 top-2 right-2 rounded-full border border-red-500 cursor-pointer'}
                  onClick={(e) => {
                    e.stopPropagation()
                    onChange(filter(value, e => e !== image))
                  }}
                >
                  <CircleX size={16}/>
                </div>
              </div>
            </div>
          ))
          }
        </div>
        : null}
    </div>
  </div>
}