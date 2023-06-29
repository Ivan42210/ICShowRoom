import CardSection from '../Components/cardSection'
import './overrideTest.css'
import { soberDatas } from '../Templates/sober/datas/dataSober'
import Card from '../Components/Card'
import Filter from '../Components/Filter'


export default function Test() {

    
    const categories = [...new Set(soberDatas.map((data)=> (data.category)))]



    return (
        <>
            <h2>This is a test</h2>

            <Filter valueArray={categories}/>

            <CardSection colNumber={4}>
                {soberDatas.map(({ id, title, thumbnail, description, author, authorPic, date, index }) => (
                    <Card
                        link='sober'
                        id={id}
                        title={title}
                        thumbnail={thumbnail}
                        description={description}
                        authorPic={authorPic}
                        author={author}
                        date={date}
                        key={index}
                    />
                ))}
            </CardSection>
        </>
    )
}