import style from './Contact.module.css'


const Contact =({ id, name, number, onDeleteContact}) => {
return (
    <li className={style.etm}>
        <span className={style.contactName}>{name}</span> 
        <span className={style.contactNumber}>{number}</span>
        <button  className={style.btn} onClick={() => onDeleteContact(id)}>
            Delete
        </button>  
        </li>  
);
};

export default  Contact;