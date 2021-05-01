export const Slides = () => {
    return (
    <div id='slides' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
           <h2>Presentation</h2> 
        </div>
        <div className='google-slides'>
        <iframe title="meow"
                src="https://docs.google.com/presentation/d/e/2PACX-1vQ-PCh7SnrXUaZJEvyk1IP1o3TL7gKIktZNtyN1tn9okZ1Z4giff5_WvkVbjQv_LeJtvc4Xei686PAM/embed?start=false&loop=false&delayms=15000" 
                frameborder="0" 
                width="960" height="569" 
                allowfullscreen="true" 
                mozallowfullscreen="true" webkitallowfullscreen="true">

        </iframe>
        </div>
      </div>
    </div>
    )
}