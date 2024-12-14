import React from 'react';
import './edu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { educatndata } from '../../data/educatndata';
const education = () => {
  const open_pdf = (pdfs) => {
  window.open(pdfs, '_blank')
    };
  const groupByRows = (data, itemsPerRow) => {
    const rows = [];
    for (let i = 0; i < data.length; i += itemsPerRow) {
      rows.push(data.slice(i, i + itemsPerRow));
    }
    return rows;
  };

  const educationRows = groupByRows(educatndata, 2); // Adjust the number based on your layout

  return (
    <div>
      
      <div name='education' className='edu_detil'>
        <div className="left_edu">
          {educationRows.map((row, rowIndex) => (
            <div key={rowIndex} className="edu_row">
              {row.map((dataedu, i) => (
                <div key={i} className="edu_item">
                  <div><FontAwesomeIcon icon={faSchool} size='2xl' /></div>
                  <div className='ed_datas' onClick={()=> open_pdf(dataedu.pdfs)} >
                    <span>{dataedu.year}</span>
                    <span>{dataedu.edu}     {dataedu.per}</span>
                
                    <span>{dataedu.clg}</span>
                    <span className='hover_text'>Click here to view certificate</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default education;