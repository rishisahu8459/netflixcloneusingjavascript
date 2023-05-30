import './Content.css'
import RowData from '../constants/URLS';
import Row from '../component/nav/row/Row';

export default function Content() {
  
  return (
    <div className='content-wrapper'>
    { RowData.map((el)=>{
      return <Row title={el.title} url={el.url}></Row>

    }
    )}
    </div>
    
    );
}
