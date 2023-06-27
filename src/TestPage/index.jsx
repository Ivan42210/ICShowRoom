import CardSection from '../Components/CardSection'
import './overrideTest.css'
import { soberDatas } from '../Templates/sober/datas/dataSober'
import Card from '../Components/Card'

export default function Test() {



    return (
        <>
            <h2>This is a test</h2>

            <CardSection colNumber={2}>
                {soberDatas.map(({ id, title, thumbnail, description, author, authorPic, date, index }) => (
                    <Card
                        link='sober'
                        id={id}
                        title={title}
                        thumbnail={thumbnail}
                        description={description}
                        author={author}
                        authorPic={authorPic}
                        date={date}
                        key={index}
                    />
                ))}
            </CardSection>
        </>
    )
}