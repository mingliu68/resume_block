export default class Animate {
    static resume(data) {
        const { personal, summary, contact, skills, education, projects, experience } = data;
        return (
            `<style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap');
            </style> 
            <div style="background-color: #ffcb00; display: flex; flex-direction: column; width: 612px; height: 792px; flex: 1; justify-content: space-between;align-items: flex-start; padding: 0; margin: 0;">
              <div id="header" style="box-sizing: border-box; margin: 0; padding: 18px; width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center; background-color: #262424;">
                <div style="width: 100px; height: 100px;background-color: white; border-radius: 53px;  overflow: hidden;position: relative; border: 3px solid #ffcb00; background-color: #262424">
                  <h1 style="font-family: Montserrat;color: #999; text-align: center;font-size: 70px; display: flex; justify-content: center; margin-top: 8px; margin-left: 2px">M</h1>
                </div>
                <div style="padding: 15px;  font-weight: 700"></div>
                <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start;">
                  <div style="font-family: Montserrat;color: white; font-size: 48px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px">Ming Liu</div>
                  <div style="margin-bottom: 5px; font-size: 13px; color: #eee; font-weight: 200;font-family: sans-serif;color: white; letter-spacing: 5px">Software Engineer</div>
                  <div style="margin-bottom: 5px; font-size: 13px; color: #eee; font-weight: 200;font-family: sans-serif;color: white; letter-spacing: 5px">Mobile App Developer</div>
                </div>
              </div>
              <div id="body" style="display: flex; flex-direction: row;">
                <div id="body-left" style="height: 588px ;padding: 20px; display: flex; flex-direction: column; border-right: 5px solid #262424; display: flex; align-items: flex-end; justify-content: space-between; border-right: 3px solid #262424" >
                  <div style="margin-bottom: 5px; font-size: 13px; color: #262424; font-weight: 700;font-family: sans-serif;color: white; letter-spacing: 5px">Summary</div>
                  <div style="margin-bottom: 5px; font-size: 13px; color: #262424; font-weight: 700;font-family: sans-serif;color: white; letter-spacing: 5px">Skills</div>
                  <div style="margin-bottom: 5px; font-size: 13px; color: #262424; font-weight: 700;font-family: sans-serif;color: white; letter-spacing: 5px">Education</div>
                  
                </div>
                <div id="body-right" style="height: 588px; display: flex; align-items: flex-start; justify-content: space-between;"></div>
              </div>
              <div id="footer" style="height: 50px;width: 100%; background-color: #262424">
            </div>`
        )
    }
}