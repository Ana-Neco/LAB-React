
function Item({name, isPacked})
{
    let itemContent = name;
    if(isPacked)
    {
        itemContent = (
            <del> 
                {name + '✔'}
            </del>
        );
    }

    return(
        //usando variavel
        <li className="item">
            {itemContent}
        </li>

        //operador ternario
        // <li className="item">
        //     {isPacked ? ( 
        //         <del>
        //             {name + ' ✔'}
        //         </del>
        //     ) : (
        //         name
        //     )}
        // </li>

        //operador logico
        // <li className="item">
        //     {name} {isPacked && '✔'}
        // </li>

    );
    
}

export default function PackingList()
{
    return(
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet whit a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}