import {Link} from 'react-router-dom'

const MedicalnfoList = ({medicaldata}) => {
    return ( 
        <div className="medical-list">
        {
            medicaldata.map((data) => (
                <div className="medical-preview" key={data.id}>
                    <Link to={`medical-information/${data.id}`}>
                        <h2>{data.firstName} {data.lastName}</h2>
                        <p>Sex: {data.sex}</p>
                    </Link>
                  
                </div>
            ))
        }
    </div>
     );
}
 
export default MedicalnfoList;