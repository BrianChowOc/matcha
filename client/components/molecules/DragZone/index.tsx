import Image from "next/image";

import { FC, InputHTMLAttributes } from "react";
import { useDropzone } from "react-dropzone";

type DragZoneProps = InputHTMLAttributes<HTMLInputElement> & {};

const MAX_SIZE_FILE = 1000000;

function sizeFileValidator(file) {
  if (file.size > MAX_SIZE_FILE) {
    return {
      code: "fichier-trop-grand",
      message: `Erreur: ${file.path} est plus grand que 1 Mo`,
    };
  }
  return null;
}

const textInputImage = (
  <>
    <p className="text-xl font-bold underline">
      {"Téléchargez une photo de profil"}
    </p>
    <p className="text-xs text-primary">{".png or .jpg 1 Mo Maximum"}</p>
  </>
);

const DragZone: FC<DragZoneProps> = () => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/png": [".png"],
        "image/jpg": [".jpg"],
      },
      validator: sizeFileValidator,
    });

  const imageProfile = acceptedFiles.map((file) => (
    <Image
      key={file.path}
      src={URL.createObjectURL(file)}
      alt={file.path}
      fill
      style={{ objectFit: "contain" }}
    />
  ));

  const rejectedFileItem = fileRejections.map(({ file, errors }) => (
    <div key={file.path} className="flex items-center justify-center ">
      <div className="mx-10 flex justify-center text-error font-bold text-center">
        {errors.map((e) => (
          <div key={e.code}>{e.message}</div>
        ))}
      </div>
    </div>
  ));

  const profileImage =
    rejectedFileItem.length > 0
      ? rejectedFileItem
      : acceptedFiles.length > 0
      ? imageProfile
      : null;

  return (
    <section className="h-full w-full">
      <div
        {...getRootProps({
          className:
            "flex flex-col justify-center items-center border-2 border-dashed h-full w-full cursor-pointer relative",
        })}
      >
        <input {...getInputProps()} />
        {profileImage && profileImage.length > 0 ? (
          <div>{profileImage}</div>
        ) : (
          textInputImage
        )}
      </div>
    </section>
  );
};

export default DragZone;
