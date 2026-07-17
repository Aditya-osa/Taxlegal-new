import {
    ClassicEditor,
    Essentials,
    Paragraph,
    Heading,
    Bold,
    Italic,
    Underline,
    Link,
    List,
    BlockQuote,
    Table,
    TableToolbar,
    Undo
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

// ponytail: single CKEditor setup targeting content field only, zero extra deps
document.addEventListener('DOMContentLoaded', () => {
    const contentEl = document.querySelector('textarea[name="content"]');
    if (contentEl) {
        contentEl.removeAttribute('required');
        ClassicEditor.create(contentEl, {
            plugins: [
                Essentials,
                Paragraph,
                Heading,
                Bold,
                Italic,
                Underline,
                Link,
                List,
                BlockQuote,
                Table,
                TableToolbar,
                Undo
            ],
            toolbar: [
                'heading',
                '|',
                'bold',
                'italic',
                'underline',
                '|',
                'link',
                'bulletedList',
                'numberedList',
                'blockQuote',
                'insertTable',
                '|',
                'undo',
                'redo'
            ],
            table: {
                contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
            },
            licenseKey: 'GPL'
        }).then(editor => {
            editor.model.document.on('change:data', () => {
                contentEl.value = editor.getData();
            });
        }).catch(error => {
            console.error('CKEditor initialization error:', error);
        });
    }
});
