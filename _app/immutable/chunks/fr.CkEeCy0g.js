import{a as r,t as i}from"./disclose-version.DUHS9dyb.js";import{s as t,f as l,N as u}from"./runtime.DKhLse5e.js";import{I as s}from"./Image.CHDDakgB.js";const v={title:"Prototype d'Arvest et le projet COESO",date:"2024-11-21",description:"Découvrez une des premières vérsions d'Arvest et le cas d'étude COESO qui a mené son développement.",tags:["research"],author:"Jacob Hart",image:"projects/coeso/coeso-networks.png"};var d=i('<h1>Prototype d’Arvest et le projet COESO</h1> <p>Le développement d’Arvest a débuté en 2023. Notre but initial était de créer une nouvelle version de notre outil <a href="https://memorekall.com/fr/" rel="nofollow">MemoRekall</a> qui serait compatible avec le International Image Interoperability Framework (<a href="https://iiif.io/" rel="nofollow">IIIF</a>), d’où le nom MemoRekall-IIIF.</p> <p>Devleopment of Arvest began in 2023. Our initial goal was too create a new version of our tool <a href="https://memorekall.com/en/" rel="nofollow">MemoRekall</a> that would be compatible with the International Image Interoperability Framework (<a href="https://iiif.io/" rel="nofollow">IIIF</a>), hence the working name MemoRekall-IIIF. Afin d’ancrer le développement dans un cas d’étude sémantique réel, nous avons créé des exemples autour de la documentation de la collaboration entre une chorégraphe et une philosophe lors de <a href="https://coeso.hypotheses.org/498" rel="nofollow">Dancing Philosophy</a>, l’un des pilotes du projet H2020 <a href="https://coeso.hypotheses.org/" rel="nofollow">COESO</a>.</p> <h2>Cas d’étude sémantique : le projet COESO</h2> <p>MemoRekall était une partie intégrante de Dancing Philosophy, pilote 2 du projet COESO. Dans un premier temps, MemoRekall a été utilisé pour documenter la collaboration entre la danseuse et la philosophe sous forme de capsules avec des vidéos annotées. Vous pouvez en apprendre plus sur ce projet <a href="https://memorekall.com/fr/coeso-fr/" rel="nofollow">ici</a>. Dans un second temps, la vidéo n’étant pas toujours le document principal autour duquel articuler les annotations et analyser la collaboration, nous avons décidé de proposer un nouveau développement de MemoRekall et de prendre pour base de travail l’environnement IIIF. Ce prototype s’intitulait MemoRekall-IIIF et nous nous référons à la première version de MemoRekall comme étant MemoRekall ‘legacy’. Au travers de cette étude de cas, nous avons souhaité montrer comment MemoRekall-IIIF permet non seulement d’annoter tous types de documents, dont des documents vidéo, mais également de mener une analyse sémantique.</p> <h2>Contenu Démo</h2> <!> <p>Ce travail a produit un réseau de manifestes IIIF. Dans <a href="https://coeso.tetras-libre.fr/" rel="nofollow">cette démo</a>, vous pouvez parcourir une collection de manifestes IIIF de natures variées. Nous avons inclus une grande diversité de documents issus de Dancing Philosophy : des captations vidéo de performances et d’ateliers, des enregistrements audios, des documents écrits, la Kinétographie Laban, des photos etc. D’un point de vue technique, nous sommes partis du viewer IIIF <a href="https://projectmirador.org/" rel="nofollow">Mirador</a> qui permet de créer des annotations pour des images. Nous y avons ajouté la possibilité d’annoter tous types de documents, dont la vidéo. Par ailleurs, nous avons créé des manifestes particuliers, soit des composites qui s’offrent comme des outils puissants pour la navigation sémiotique et fluide des collections multimodales.</p> <p>Dans les manifestes <em>01 Manual Network Configuration</em> et <em>02 Automatic Network Configuration</em>, vous trouverez des visualisations en réseau d’une même collection de documents. Le premier a été créé de manière manuelle, le deuxième en utilisant un algorithme simple qui crée des liens à partir des métadonnées du document. Ces visualisations sont interactives, et vous pouvez ouvrir chaque document directement dans Mirador en cliquant dessus.</p> <p>Dans les manifestes 03-06 nous montrons un exemple d’une capsule MemoRekall ‘legacy’ qui a été transposée dans ce nouvel environnement. Il est important pour nous d’assurer une rétrocompatibilité avec la version précédente de MemoRekall, et ces manifestes démontrent que cela peut être fait de manière très simple avec un traitement du fichier XML généré par MemoRekall ‘legacy’. Nous avons également exploré comment ces transpositions peuvent être augmentées dans le nouvel environnement par des visualisations en réseau et différents types d’annotations.</p> <p>Dans le manifeste <em>07 Composite Collaboration Analytics Compass</em> une autre visualisation du corpus est générée par les données issues de notre analyse sémantique sur la collaboration entre la danseuse et la chorégraphe à partir des <a href="https://zenodo.org/records/5599052#.ZCwfGuxBxeU" rel="nofollow">travaux de Dominique Boullier</a>. Chaque document est positionné sur une “boussole” qui indique la typologie de leur nature collaborative (voir l’article).</p> <p>Ce travail nous a permis de comprendre l’importance d’offrir des outils puissants mais simples afin de permettre à tous les utilisateurs de créer leurs propres interfaces à partir des données issues d’un corpus documentaire multimodal et accompagner ainsi leurs projets de recherches ou artistiques. Plutôt que de proposer un ensemble d’interfaces fixes, nous souhaitons rendre cette fonctionnalité complètement personnalisable.</p> <h2>Bac à sable</h2> <!> <p>Vous pouvez également expérimenter dans un <a href="https://iiif.tetras-libre.fr/" rel="nofollow">bac à sable</a> en direct et créer vos propres annotations. Il s’agit d’une version vierge de l’outil avec quelques documents d’exemple disponibles. Les possibilités sont limitées à des annotations simples, et le bac à sable est commun à tous, ce qui signifie que vous verrez les annotations des autres et les autres verront les vôtres (nous nettoyons le contenu régulièrement). Cette démo vous permettra de vous familiariser avec l’interface MemoRekall-IIIF et de mieux cerner les outils qui seront disponibles.</p> <h2>Code source et documentation</h2> <p>Vous pouvez consulter le code source <a href="https://gitlab.tetras-libre.fr/iiif/poc-mirador-video-annotation" rel="nofollow">ici</a>. Vous pouvez aussi consulter un <a href="https://gitlab.tetras-libre.fr/iiif/coeso-deliverable/-/wikis/home" rel="nofollow">wiki</a> qui vous expliquera les différentes fonctionnalités de l’interface, et qui répondra à vos questions d’usage.</p>',1);function f(n){var e=d(),o=t(l(e),12);s(o,{src:"projects/coeso/networks.png",alt:"Demo content networks",width:"100%"});var a=t(o,14);s(a,{src:"projects/coeso/sandbox.png",alt:"Demo content sandbox",width:"100%"}),u(6),r(n,e)}export{f as default,v as metadata};
