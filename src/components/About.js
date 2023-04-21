function About(props){
    const{imageSrc="https://via.placeholder.com/215",aboutTex}=props
    
     
    return (
        <aside>
            <img src={imageSrc} alt="blog logo"/>
            <p>{aboutTex}</p>
        </aside>
    )

}

export default About