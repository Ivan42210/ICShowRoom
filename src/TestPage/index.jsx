import './overrideTest.css'
import Card from "../Components/Card";
import CardSection from "../Components/cardSection";
import { soberDatas } from "../Templates/sober/datas/dataSober";

export default function Test(){

    console.log(soberDatas)

    return(
        <>
            <h2>This is a test</h2>

            <CardSection 
                yourClassName="test"
                numberOfCol={3}
                content={soberDatas.map(({id,title,thumbnail,description,author,authorPic,date}) => (
                    <Card 
                        yourClassName="test"
                        link={`sober`}
                        id={id}
                        title={title}
                        thumbnail={thumbnail}
                        description={description}
                        author={author}
                        authorPic={authorPic}
                        key={id}
                        date={date}
                    />
                ))}/>
                
        </>
    )
}