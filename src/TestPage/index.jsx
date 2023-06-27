import CardSection from '../Components/cardSection'
import './overrideTest.css'
import { soberDatas } from '../Templates/sober/datas/dataSober'
import Card from '../Components/Card'
import { useEffect, useState } from 'react'

export default function Test() {

    const [width, setWindowWith ] = useState(0)

    const updateDimension = () => {
        const width = window.innerWidth
        setWindowWith(width)
        
    }

    useEffect( () => {
        updateDimension();
        window.addEventListener("resize", updateDimension);
       
        return ()=> window.removeEventListener("resize", updateDimension);
        
    }, [])

   const responsive = {
        smartphoneView : width < 780,
        tabletView : width < 1080 && width > 781,
        desktop : width > 1280,
    }

    console.log(responsive.desktop)
  



    return (
        <>
            <h2>This is a test</h2>

            <CardSection colNumber={4}>
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