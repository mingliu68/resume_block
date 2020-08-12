

export default class Animate {

    static resume(data, category) {
        const { personal, summary, contact, skills, education, projects, experience } = { ...data };
        return (
            `<style>
            @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap');
            @page {
                margin: 0;
                padding: 0;
              }
            </style> 
            <div style="background-color: #ffcb00; display: flex; flex-direction: column; width: 103%; height: 103%; flex: 1; justify-content: space-between;align-items: flex-start; padding: 0; margin-left: -8px; margin-top: -8px;">
                <div id="header" style="height: 15%; box-sizing: border-box; margin: 0; padding: 18px; width: 100%; display: flex; flex-direction: row; justify-content: center; align-items: center; background-color: #262424;">
                    <div style="width: 100px; height: 100px;background-color: white; border-radius: 53px;  overflow: hidden;position: relative; border: 3px solid #ffcb00; background-color: #262424">
                        <h1 style="font-family: Montserrat;color: #999; text-align: center;font-size: 70px; display: flex; justify-content: center; margin-top: 8px; margin-left: 2px">${personal.firstname[0]}</h1>
                    </div>
                    <div style="padding: 15px;  font-weight: 700"></div>
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: flex-start;">
                        <div style="font-family: Montserrat;color: white; font-size: 48px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px">${personal.firstname} ${personal.lastname}</div>
                        <div style="margin-bottom: 5px; font-size: 13px; color: #eee; font-weight: 200;font-family: sans-serif;color: white; letter-spacing: 5px">${personal.title[0]}</div>
                        <div style="margin-bottom: 5px; font-size: 13px; color: #eee; font-weight: 200;font-family: sans-serif;color: white; letter-spacing: 5px">${personal.title[1]}</div>
                    </div>
                </div>
                <div id="body" style="height: 80%; display: flex; flex-direction: row;width: 100%;align-items: center;">
                    <div id="body-left" style="width: 30%; height: 90% ;padding: 20px; display: flex; flex-direction: column; border-right: 5px solid #262424; display: flex; align-items: flex-end; justify-content: space-between; " >
                        <div style="text-align: right;">
                            <div style="margin-bottom: 5px; font-size: 20px; color: #262424; font-weight: 800;font-family: Montserrat;letter-spacing: 5px">${category[1]}</div>
                            <div> ${summary[0]}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="margin-bottom: 5px; font-size: 20px; color: #262424; font-weight: 800;font-family: Montserrat;letter-spacing: 5px">${category[2]}</div>
                            <div>  
                                <div>${contact.phone[0]}</div>
                                <div>${contact.email[0]}</div>
                                <div>${contact.address[1]}</div>
                                <div><a href=${contact.social[0].link}>${contact.social[0].media}</a></div>
                                <div><a href=${contact.social[1].link}>${contact.social[1].media}</a></div>
                            </div>
                        </div>                  
                        <div style="text-align: right;">                    
                            <div style="margin-bottom: 5px; font-size: 20px; color: #262424; font-weight: 800;font-family: Montserrat;letter-spacing: 5px">${category[3]}</div>
                            <div>${skills[0]}</div>
                        </div>
                        <div style="text-align: right;">                  
                            <div style="margin-bottom: 5px; font-size: 20px; color: #262424; font-weight: 800;font-family: Montserrat;letter-spacing: 5px">${category[4]}</div>
                            <div>
                                <div>${education[0].institution}</div>
                                <div>${education[0].city} ${education[0].state}</div>
                                <div>${education[0].startYear} - ${education[0].stillInSchool == true ? "Now" : education[0].endYear}</div>
                                <div>${education[0].degree ? education[0].degree : ""}</div>
                            </div>    
                            <div>
                                <div>${education[1].institution}</div>
                                <div>${education[1].city} ${education[1].state}</div>
                                <div>${education[1].startYear} - ${education[1].stillInSchool == true ? "Now" : education[0].endYear}</div>
                                <div>${education[1].degree ? education[1].degree : ""}</div>
                            </div>    
                        </div>
                    </div>
                    <div id="body-right" style="width: 70%; height: 90%; padding: 20px; display: flex; flex-direction: column; align-items: flex-start; justify-content: space-between;">
                        <div>                    
                        <div style="margin-bottom: 5px; font-size: 20px; color: #262424; font-weight: 800;font-family: Montserrat;letter-spacing: 5px">${category[5]}</div>
                            <div>   
                                <div>${projects[0].name}</div>
                                <div>${projects[0].description}</div>
                                <div>${projects[0].tags[0]} ${projects[0].tags[1]} ${projects[0].tags[2]} ${projects[0].tags[3]}</div>
                            </div>
                            <div>   
                                <div>${projects[1].name}</div>
                                <div>${projects[1].description}</div>
                                <div>${projects[1].tags[0]} ${projects[1].tags[1]} ${projects[1].tags[2]} ${projects[1].tags[3]}</div>
                            </div>    
                        </div>
                        <div>                    
                        <div style="margin-bottom: 5px; font-size: 20px; color: #262424; font-weight: 800;font-family: Montserrat;letter-spacing: 5px">${category[6]}</div>
                            <div>
                                <div>${experience[0].position}</div>
                                <div>${experience[0].company}</div>
                                <div>${experience[0].description}</div>
                                <div>${experience[0].startMonth}, ${experience[0].startYear} - ${experience[0].stillWorkThere ? "Now" : experience[0].endMonth + ", " + experience[0].endYear}</div>

                            </div>
                            <div>
                                <div>${experience[1].position}</div>
                                <div>${experience[1].company}</div>
                                <div>${experience[1].description}</div>
                                <div>${experience[1].startMonth}, ${experience[1].startYear} - ${experience[1].stillWorkThere ? "Now" : experience[1].endMonth + ", " + experience[1].endYear}</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer" style="height: 5%;width: 100%; background-color: #262424"></div>
            </div>`
        )
    }
}