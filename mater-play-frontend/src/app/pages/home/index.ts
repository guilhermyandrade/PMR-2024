import { useEffect, useState } from "react";
import { ICategory } from "../../@libs/types";
import { CategoryService } from "../../services/category-service";
import { HightLightSection } from "../../components/HighlightSection";

function HomePage() {

    const [categories, setCategories] = useState<ICategory[]> ([]);

    useEffect(()=> {
        
        CategoryService.getAll()
        .then(result => {
            console.log(result)
            setCategories(result.data)
        })
        .catch(error => {
            console.log(error)
        })

    }, []);


    return (
        <main style={{marginTop: "8rem"}} >

            <HighLightSection />
        
            {
                categories.map(item => (
                    <Section key={item.id} category={item}/>
                ))
            }
        </main>
    )
}

export default HomePage;