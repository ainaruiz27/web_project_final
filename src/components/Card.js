export default function Card({ title, content }) {
    return (<>
        <div>
            <h3>{title}</h3>
            <div className="card__content" dangerouslySetInnerHTML={{ __html: content }} ></div>
        </div>
    </>)

}