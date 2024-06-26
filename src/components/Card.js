export default function Card({ title, content }) {
    return (<>
        <div>
            <h3>{title}</h3>
            <div dangerouslySetInnerHTML={{ __html: content }} ></div>
        </div>
    </>)

}