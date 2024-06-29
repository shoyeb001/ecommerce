import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "@/components/editor/ToolBar.jsx";
const Tiptap = ({longDesc, onChange})=>{
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                heading: {
                    HTMLAttributes: {
                        class: "text-xl font-bold",
                    },
                },
                bulletList: {
                    HTMLAttributes: {
                        class: "list-disc pl-4",
                    },
                },
                orderedList: {
                    HTMLAttributes: {
                        class: "list-decimal pl-4",
                    },
                },
            }),
        ],
        content: longDesc,
        editorProps: {
            attributes: {
                class: "rounded-md border min-h-[150px] text-wrap  p-4",
            },
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML());
        },
    });

    return (
        <div className="flex flex-col justify-stretch gap-2">
            <ToolBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}
export default Tiptap;