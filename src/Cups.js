//let guest = 0;

function Cup({ guest })
{
    //guest = guest + 1;
    return <h3>Tea cup for guest #{guest}</h3>;
}

export default function TeaGeathering()
{
    let cups = [];

    for (let i = 1; i <= 5; i++){
        cups.push(<Cup key={i} guest={i} />);
    }

    return cups;

    // return(
    //     <>
    //         <Cup guest={1} />
    //         <Cup guest={2} />
    //         <Cup guest={3} />
    //     </>
    // );
}