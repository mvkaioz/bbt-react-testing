import React from 'react';
import './App.css';

const RoundedRectangle = ({ children }) => {
  return (
    <div
      style={{
        background:'#FAE9D3',
        borderRadius: '10px',
        top: '416px',
        left: '57px',
        padding: '20px',
        width: '358px',
        height: '652px',
        textAlign: 'left',
      }}
    >
      {/* Header with different font and size */}
      <h1 style={{ fontFamily: 'Arial', fontSize: '40px', marginBottom: '-25px', color:'#714344', textAlign:'left' }}>
        {children[0]}
      </h1>

      {/* Text with different font and size */}
      <p style={{ fontFamily: 'Helvetica', fontSize: '24px', margin: '0' }}>
        {children[1]}
      </p>

    </div>
  );
};

function App() {
  return (
    <div className="App">
      <RoundedRectangle>
        <h1>menu
      {/* Horizontal line */}
      <div
        style={{
          border: 'none',
          borderTop: '5px solid #A3665780',
          width: '168px',
          margin: '0',
          borderRadius: '5px',
          alignContent: 'center'
        }}/></h1>
        
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>        
            <a href='#'style={{ fontSize: '24px', textDecoration:'none', color:'#714344', left: '24'
 }}>College Credit Classes</a></li>
          <li style={{ marginBottom: '10px' }}>         
            <a href='#'style={{ fontSize: '24px', textDecoration:'none', color:'#714344'
 }}>Post Secondary Education</a></li>

          <li style={{ marginBottom: '10px' }}>          
            <a href='#'style={{ fontSize: '24px', textDecoration:'none', color:'#714344'
 }}>Internships</a></li>

          <li style={{ marginBottom: '10px' }}>         
            <a href='#'style={{ fontSize: '24px', textDecoration:'none', color:'#714344'
 }}>Housing</a></li>

          <li style={{ marginBottom: '10px' }}>          
            <a href='#'style={{ fontSize: '24px', textDecoration:'none', color:'#714344'
 }}>Tuition & Aid</a></li>

        {/* Horizontal line */}
        <div
        style={{
          border: 'none',
          borderTop: '5px solid #A3665780',
          width: '168px',
          margin: '0',
          marginbottom: '10px',
          borderRadius: '5px',
          alignContent: 'center'
        }}/>

          <li style={{ marginBottom: '10px', marginTop:'10px' }}>          
            <a href='#'style={{ fontSize: '24px', textDecoration:'none', color:'#714344', left: '24'
 }}>Team</a></li>

       {/* Horizontal line */}
       <div
        style={{
          border: 'none',
          borderTop: '5px solid #A3665780',
          width: '168px',
          margin: '0',
          marginbottom: '10px',
          borderRadius: '5px',
          alignContent: 'center'
        }}/>

        <li style={{ marginBottom: '10px', marginTop:'10px' }}>
            <a href='#'style={{ fontSize: '24px', textDecoration:'none', color:'#714344', left: '24'
 }}>Help</a></li>
          
       {/* Horizontal line */}
       <div
        style={{
          border: 'none',
          borderTop: '5px solid #A3665780',
          width: '168px',
          margin: '0',
          marginbottom: '10px',
          borderRadius: '5px',
          alignContent: 'left'
        }}/>
 </ul>

      </RoundedRectangle>
    </div>
  );
}

export default App;