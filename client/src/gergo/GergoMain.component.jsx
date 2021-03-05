import "./gergostyle.css";

const GergoMainComponent = () => {

  return ( 

    <>
      <div id="progressbar" onScroll={window.onscroll = () => {
        let progress = document.getElementById("progressbar");
        let totalHeight = document.body.scrollHeight - window.innerHeight;
        let progressHeight = (window.pageYOffset / totalHeight) * 100;
        progress.style.height = progressHeight + "%";
      } }></div>
      <div id="scrollpath"></div>
    </>

   );
}
 
export default GergoMainComponent;