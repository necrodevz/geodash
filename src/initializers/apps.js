import ltsLogo from './lts-icon.png'
import alfrescoLogo from './alfresco-icon.png'
import filetrailLogo from './filetrail-icon.jpg'
import googleLogo from './google-icon.png'
import nlaLogo from './nla-icon.gif'
import tajLogo from './taj-icon.jpg'

export const appSites = [
    {
        key: 1,
        title: 'LTS',
        subtitle: "Geoland's Land Title System",
        img: {
            src: ltsLogo,
            height: '250px',
            width: '250px'
        }, 
        description: 'Use the Land Title System to add and edit Land Title Applications',
        target: { 
            url: 'https://app.geolandonline.com',
            app: 'firefox'
            
        }
    },
    {
        key: 2,
        title: 'Filetrail',
        subtitle: "File management system",
        img: {
            src: filetrailLogo,
            height: '250px',
            width: '250px'
        }, 
        description: 'Use Filetrail to track and move physical files in the office',
        target: { 
            url: 'https://geoland.filetrail.com',
            app: 'iexplore'
            
        }
    },
    {
        key: 3,
        title: 'Alfresco',
        subtitle: "Document Management system",
        img: {
            src: alfrescoLogo,
            height: '250px',
            width: '250px'
        }, 
        description: 'Use Alfresco to manage internal and external draft and template documents',
        target: { 
            url: 'https://files.geolandonline.com',
            app: 'firefox' || 'google chrome'
        }
    },
    {
        key: 4,
        title: 'Eland',
        subtitle: "External Website managed by NLA",
        img: {
            src: nlaLogo,
            height: '250px',
            width: '250px'
        }, 
        description: 'Use Eland to check <More info needed>',
        target: { 
            url: 'https://www.elandjamaica.gov.jm',
            app: 'firefox' || 'google chrome'
            
        }
    },
    {
        key: 5,
        title: 'GMail',
        subtitle: "Google Mail",
        img: {
            src: googleLogo,
            height: '250px',
            width: '250px'
        }, 
        description: 'Access emails here',
        target: { 
            url: 'https://inbox.gmail.com',
            app: 'firefox' || 'google chrome'
            
        }
    },
    {
        key: 6,
        title: 'Property Tax Query',
        //subtitle: ,
        img: {
            src: tajLogo,
            height: '250px',
            width: '250px'
        }, 
        description: 'Use Valuation No. to gain tax roll information',
        target: { 
            url: 'https://ptsqueryonline.fsl.org.jm/PTSOnlineWeb/ptsquery.jsp',
            app: 'firefox' || 'google chrome'
            
        }
    }
]