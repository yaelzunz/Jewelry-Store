export default function Footer() {
    return <div style={{backgroundColor: '#f3f3f3', width: '100%', height: '150px', marginTop: 40}}>
        <div style={{height: 2, width: '100%', backgroundColor: '#909090'}}/>
        <div style={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <p style={{color: '#444444', fontSize: 25}}>
                Keren Or Moreno and Yael Zunz 2023 ©
            </p>

            <div style={{display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center'}}>

            <h5 >Keren or Moreno</h5>

                <a style={{textDecoration: 'none'}} href="https://github.com/kerenormoreno">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{height: 30, width: 30, marginRight: 5}} alt="" src="https://pngimg.com/uploads/github/github_PNG45.png"/>
                        
                    </div>
                    
                </a>
                <a style={{textDecoration: 'none'}} href="https://linkedin.com">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{height: 30, width: 30, marginRight: 5}} alt="" src="https://logodix.com/logo/4353.png"/>

                    </div>
                </a>

                <h5>Yael Zunz</h5>
                <a style={{textDecoration: 'none'}} href="https://github.com/yaelzunz">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{height: 30, width: 30, marginRight: 5}} alt="" src="https://pngimg.com/uploads/github/github_PNG45.png"/>
                    
                    </div>
                </a>
                <a style={{textDecoration: 'none'}} href="https://linkedin.com">
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img style={{height: 30, width: 30, marginRight: 5}} alt="" src="https://logodix.com/logo/4353.png"/>
                    </div>
                </a>
                
          




            </div>

           
        </div>
    </div>
}