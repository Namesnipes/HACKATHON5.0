import React, { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function MyAwesomeTextEditor() {
    const [value, setValue] = useState("");
    const modules = useMemo(() => {
        return {
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ['bold', 'italic', 'underline', 'strike'],
                ['link', 'image'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['clean'],
              ],
        };
    }, []);

    return (
        <div>
            <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                onChange={(e) => setValue(e)}
            ></ReactQuill>
        </div>
    );

}