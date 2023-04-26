import Markdown from 'markdown-to-jsx';

export default function MarkdownRenderer(props) {
    return <Markdown {...props} />;
}