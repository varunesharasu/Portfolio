export const portfolio = {
  name: 'Alex Morgan', role: 'Creative developer & systems thinker', location: 'Bengaluru, India', email: 'hello@alexmorgan.dev',
  bio: 'I turn complex ideas into calm, useful digital experiences. My work sits at the intersection of interface design, thoughtful engineering, and a little bit of playful experimentation.',
  skills: { Frontend: ['React', 'JavaScript', 'CSS Architecture', 'Accessibility'], Tools: ['Git', 'Figma', 'Vite', 'Storybook'], Exploring: ['WebGL', 'Motion Design', 'Design Systems'] },
  projects: [
    ['Northstar','Product platform','A focused command center for distributed teams to make better decisions, faster.',['React','Design system'],'#5e60ce'],
    ['Mono Journal','Editorial tool','A quiet writing space that makes the ritual of capturing ideas feel effortless.',['JavaScript','CSS'],'#48bfe3'],
    ['Field Notes','Mobile experience','A location-aware notebook for collecting fragments from the places we pass through.',['React Native','Maps'],'#80ffdb'],
    ['Common Ground','Community platform','A considered space for neighbors to share resources, events, and local knowledge.',['React','Accessibility'],'#6930c3'],
    ['Signal House','Data experience','A clear, visual home for exploring signals hidden inside complex datasets.',['Vite','Data viz'],'#5390d9'],
    ['Soft Launch','Brand system','A flexible identity and web experience for products finding their first audience.',['Figma','CSS'],'#7400b8']
  ],
  experience: [['2023 — now','Independent','Creative Developer','Building digital products with ambitious teams and kind people.'],['2021 — 23','Studio Arc','Frontend Engineer','Shipped accessible interfaces for culture, commerce, and climate.'],['2019 — 21','Kite Labs','Design Engineer','Created the first component library and helped it scale.']],
  education: [['2015 — 17','Higher Secondary','Science & mathematics'],['2017 — 21','B.E. Computer Science','Designing with code, graduating with distinction'],['2020','Open source','Learning in public, one pull request at a time']]
} 
export const projectData = portfolio.projects.map(([title,type,text,tags,color]) => ({title,type,text,tags,color}))
