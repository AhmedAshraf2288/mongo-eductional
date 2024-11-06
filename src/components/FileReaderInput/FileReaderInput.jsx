import { Fragment } from "react";
import Dropzone, { useDropzone } from "react-dropzone";
import Button from "../Button/Button";
import Error from "../Error/Error";
import "./FileReaderInput.css";
import { FormattedMessage } from "react-intl";

export default function FileReaderInput({ error, title, id, files, setFiles }) {
  // const [previewImages, setPreviewImages] = useState();
  const { open } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div className="w-100">
      <Dropzone
        onDrop={(acceptedFiles) => {
          setFiles(acceptedFiles);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <Fragment>
            <div className="d-flex flex-column gap-2">
              <label htmlFor={id} className="modal__label">
                {title}:
              </label>
              <section className="dropzone-container w-100">
                <div {...getRootProps()} className="dropzone">
                  <input {...getInputProps()} />
                  <p className="mb-2">
                    {files ? files.name : 'Drop your file here or click the button below'}
                  </p>
                  <Button type="button" func={open}>
                    <FormattedMessage id="chooseFile"/>
                  </Button>
                </div>
              </section>
            </div>
          </Fragment>
        )}
      </Dropzone>
      {error && <Error>{error}</Error>}
    </div>
  );
}
