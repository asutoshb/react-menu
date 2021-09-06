import './file.css';


function props({color, name})
{
    return (
        <div className={color} id="size1">
           
                {name}
            
        </div>
    );
}



export default props;