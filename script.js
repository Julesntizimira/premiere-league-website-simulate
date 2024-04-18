const sponsorsContainer = document.querySelector('.sponsors-container');
const sponsors = ['nike', 'easport', 'barclays', 'hublot', 'avery', 'castrol', 'oracle'];

function createLogo(name) {
    let sponsorsLogo = document.createElement('div');
    sponsorsLogo.classList.add('sponsors-logo');
    let logo = document.createElement('img');
    logo.setAttribute('src', `images/sponsors-logos/${name}.png`);
    sponsorsLogo.append(logo);
    return sponsorsLogo;
}

async function paginateSponsors(a, b) {
    // Remove existing logos with smooth transition
    await document.querySelectorAll('.sponsors-logo').forEach(spLogo => {
        spLogo.classList.add('fadeOut');
        setTimeout(() => spLogo.remove(), 500); // Remove after transition ends (adjust timing as needed)
    });

    // Add new logos after the transition
    setTimeout(() => {
        for (let i = a; i < b; i++) {
            sponsorsContainer.append(createLogo(sponsors[i]));
        }
    }, 500); // Wait for the transition to finish (adjust timing as needed)
    document.querySelectorAll('.dot').forEach((dot) => {
        if (dot.classList.contains('color')) {
            dot.classList.remove('color');
            dot.classList.add('gray')
        } else {
            dot.classList.remove('gray');
            dot.classList.add('color')
        }
    })
}

let a = 0;
let b = 0;
window.setInterval(() => {
    if (a === 0) {
        a = 4;
        b = 7;
    } else {
        a = 0;
        b = 4;
    }
    paginateSponsors(a, b);
}, 3000);
