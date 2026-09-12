

export default function IncompleteBanner(){
   return( 
        <div style={{
                display: 'grid',
                position:'absolute', 
                inset:'80% 0%',
                backgroundImage:'repeating-linear-gradient(315deg, black, yellow 50px, black 50px)',
                width:'100%',
                height:'20%',
                zIndex: '1000',
                border:'solid 5px black',
                
        }}> 
                <h1 style={{
                        justifySelf:'center',
                        alignSelf:'center',
                        textShadow:'0 0 5px black, 0 0 5px black, 0 0 5px black'
                }}>SECTION IN PROGRESS</h1>
        </div>
)}