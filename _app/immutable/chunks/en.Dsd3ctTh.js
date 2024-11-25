import{a as s,t as r}from"./disclose-version.C2fYjYVg.js";import{s as t,f as l,P as h}from"./runtime.hQjgarjH.js";import{I as a}from"./Image.my98YKix.js";const f={title:"Arvest prototype and the COESO Project",date:"2024-11-21",description:"Discover an early version of Arvest and the COESO case study that drove it's development.",tags:["research"],author:"Jacob Hart",image:"projects/coeso/coeso-networks.png"};var c=r('<h1>Arvest prototype and the COESO Project</h1> <p>Devleopment of Arvest began in 2023. Our initial goal was too create a new version of our tool <a href="https://memorekall.com/en/" rel="nofollow">MemoRekall</a> that would be compatible with the International Image Interoperability Framework (<a href="https://iiif.io/" rel="nofollow">IIIF</a>), hence the working name MemoRekall-IIIF. To anchor development in a real semantic case study, we created a number of examples around the documentation of a collaboration between a choreographer and a philosopher in <a href="https://coeso.hypotheses.org/498" rel="nofollow">Dancing Philosophy</a>, one of the Pilots of the H2020 <a href="https://coeso.hypotheses.org/" rel="nofollow">COESO</a> Project.</p> <h2>Semantic Analysis Case Study: the COESO Project</h2> <p>MemoRekall was an integral part of Dancing Philosophy, Pilot 2 of the COESO Project. To begin, MemoRekall was used to document the collaboration between the dancer and the philosopher in the form of annotated video capsules. You can learn more about the project <a href="https://memorekall.com/en/coeso-en/" rel="nofollow">here</a>. In this second iteration of MemoRekall, we considered that video is not always the principal document around which one may need to articulate one’s annotations in order to analyze a collaboration. We decided to propose a new development of MemoRekall and take as a basis a IIIF-driven environment. We called this prototype MemoRekall-IIIF and refered to the first version of MemoRekall as MemoRekall ‘legacy’. With this case study, we wished to show how MemoRekall-IIIF allows for the annotation of all types of documents, including video, and also that it could support a semantic analysis.</p> <h2>Demo Content</h2> <!> <p>This work produced a IIIF manifest network. In this <a href="https://coeso.tetras-libre.fr/" rel="nofollow">live demo</a>, you can browse a collection of IIIF manifests of varying natures. We included a diverse number of documents from Dancing Philosophy: video recordings of performances and workshops, audio recordings, written documents, Laban Kinetography, photos etc. From a technical point of view, we built upon the <a href="https://projectmirador.org/" rel="nofollow">Mirador</a> IIIF viewer interface that allows the user to create annotations for image documents. We added the possibility to annotate all types of documents, including video. In addition to this, we also shaped composite and bespoke manifests that offer themselves as powerful tools for semiotic and fluid navigation of multimodal collections.</p> <p>In manifests <em>01 Manual Network Configuration</em> and <em>02 Automatic Network Configuration</em>, you will find network visualizations of a same collection of documents. The first was made manually, the second using a simple algorithm that created links by processing the documents’ metadata. These visualizations are interactive, and you can open each document straight in the Mirador viewer by clicking on it.</p> <p>In manifests 03-06 we demonstrate an example of a ‘legacy’ MemoRekall capsule that has been transposed into the new environment. It is important for us to ensure retro compatibility with the previous version of MemoRekall, and these manifest networks demonstrate that it can easily be done through simple parsing of the XML file generated by MemoRekall ‘legacy’. We also explored how these translations can be augmented in the new environment with network visualizations and different types of annotations.</p> <p>In the manifest <em>07 Composite Collaboration Analytics Compass</em> another bespoke data-driven visualization of the corpus is derived from our semantic analysis on the collaboration between the dancer and philosopher, based on the <a href="https://zenodo.org/records/5599052#.ZCwkbexBzOF" rel="nofollow">work of Dominique Boullier</a>. Each document is positioned on a compass that indicates the typology of their collaborative nature (see the article).</p> <p>This work allowed us to understand how important it will be to offer simple yet powerful tools to all users to create their own data-driven interfaces from a multimodal documentary corpus, accompanying their research or artistic projects. Rather that proposing a fixed set of interface possibilities, we wish to make this feature completely customizable.</p> <h2>Sandbox</h2> <!> <p>You can also experiment in the live <a href="https://iiif.tetras-libre.fr/" rel="nofollow">sandbox</a> and create your own annotations. This is an empty version of the tool with a few example documents loaded. The possibilities werelimited to simple annotations, and the sandbox was open to all meaning that you will see annotations made by other users and other users will see yours (these regularly get cleaned-up). This live demo allowed the user to get familiar with the MemoRekall-IIIF interface, and get a feel for the tools that will become available.</p> <h2>Source Code and Documentation</h2> <p>You can consult the source code <a href="https://gitlab.tetras-libre.fr/iiif/poc-mirador-video-annotation" rel="nofollow">here</a>. You can also consult a <a href="https://gitlab.tetras-libre.fr/iiif/coeso-deliverable/-/wikis/home" rel="nofollow">wiki</a> here that took you through the various functionalities of the interface, and answers and questions you may have around usage.</p>',1);function u(n){var e=c(),o=t(l(e),10);a(o,{src:"projects/coeso/networks.png",alt:"Demo content networks",width:"100%"});var i=t(o,14);a(i,{src:"projects/coeso/sandbox.png",alt:"Demo content sandbox",width:"100%"}),h(6),s(n,e)}export{u as default,f as metadata};
