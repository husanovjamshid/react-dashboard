const Overview = ({ children, children2, children3, children4, childrenRow }) => {
  return (
    <div
    className='overview'
    style={{ backgroundColor: '#F7F8FC', paddingBottom: '30px' }}
    >
    <div>
    {children}
    {children2}
    {children3}
    {children4}
    {childrenRow}
    </div>
    </div>
    
    );
  };
  
  export default Overview;
  