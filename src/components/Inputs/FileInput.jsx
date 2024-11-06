import Error from "../Error/Error";
import styles from "./Inputs.module.css";
import { Field } from "formik";
import RequiredInd from "../RequiredInd/RequiredInd";
import { useMemo } from "react";

export default function FileInput({
    name,
    error,
    backError,
    className,
    row,
    required,
}) {
    return (
        <div
            className={`d-flex w-100 flex-column mb-4 ${row ? "flex-md-row align-items-md-center gap-3" : "flex-column gap-2"
                } ${className ? className : ""}`}
        >
            <div className="d-flex gap-2">
                {required ? <RequiredInd /> : ""}
            </div>
            <div className="w-100 h-100">
                <Field
                    name={name}
                    id={name}
                    component={FileInp}
                />
                {<Error>{backError || error}</Error>}
            </div>
        </div>
    );
}

const FileInp = ({
    field,
    form,
}) => {
    const id = useMemo(() => Date.now(), [])

    return (
        <>
            <label htmlFor={id} className={styles.fileInput}>
                <span>
                    رفع
                </span>
                <p>
                    ارفع شهادة ميلادك / بطاقتك
                </p>
            </label>
            {form.values[field.name] ? (
                <p className="fs-6 mt-1 text-success">تم رفع الصورة بنجاح</p>
            ) : null}
            <input
                name={field.name}
                id={id}
                type="file"
                onChange={(e) => form.setFieldValue(field.name, e.target.files[0])}
                onBlur={field.onBlur}
                style={{
                    display: "none",
                }}
            />
        </>
    );
};
