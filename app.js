const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



function drawSkillCircle(canvasId, percentage, color) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const radius = (canvas.width / 2) - 10; 
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const endAngle = (percentage / 100) * 2 * Math.PI;

    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();

   
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, endAngle - 0.5 * Math.PI, false);
    ctx.lineWidth = 10;
    ctx.strokeStyle = color;
    ctx.stroke();
}

drawSkillCircle('c', 60, 'orange'); 
drawSkillCircle('html', 70, 'orange');  
drawSkillCircle('css', 75, 'orange');
drawSkillCircle('javascript', 60, 'orange');
drawSkillCircle('python', 70, 'orange');
drawSkillCircle('react', 60, 'orange');
drawSkillCircle('java', 60, 'orange');
drawSkillCircle('django', 70, 'orange');


const links = document.querySelectorAll('.sidebar a');
        console.log(links)

            links.forEach(link => {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    links.forEach(scroll => {
                        scroll.classList.remove('active');
                    })
                    link.classList.add('active');
                    const targetId = this.getAttribute('href').substring(1);
                    console.log(targetId)
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                });
});