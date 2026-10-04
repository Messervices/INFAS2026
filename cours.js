/* =====================================================================
   COURS – à compléter. Un bloc par matière, avec l'identifiant du sommaire.
   Identifiants : dig, cel, loc, cv, resp, ped, em, sm, dt, mi, hy, vh, sn,
   nu, ep, pa, ic, ur, gy, im, th, rc, sns, sp, pr, ds, he ...
   (voir la liste S1 au début de script.js)

   Exemple (à copier, décommenter et adapter) :

   "dig": { html: `
       <h3>1. Définition</h3>
       <p>Le tube digestif s'étend de la bouche à l'anus.</p>
       <h3>2. Les organes</h3>
       <ul><li>Bouche</li><li>Œsophage</li><li>Estomac</li></ul>
   ` },

   Une matière sans bloc affiche « Le cours sera bientôt disponible ».
   Après modification : envoyer cours.js sur GitHub (il remplace l'ancien).
   ===================================================================== */
var COURS_DATA = {

"dig": { html: `
<div class="retenir"><b>Fiche élaborée d'après l'exercice « Anatomie de l'appareil digestif », sa correction et le cours fourni.</b> Si votre cours officiel indique d'autres valeurs chiffrées, c'est lui qui fait foi.</div>

<h3>1. Généralités</h3>
<p><b>Définition :</b> l'appareil digestif est l'ensemble des organes responsables de l'ingestion, de la digestion des aliments, de l'absorption des nutriments et de l'élimination des déchets non assimilés (dégradation et transformation des aliments, puis élimination des résidus).</p>
<p>Sur le plan anatomique, il se divise en deux grands ensembles :</p>
<ul>
<li><b>Le tube digestif :</b> conduit continu d'environ <b>9 mètres</b> de long, de la bouche à l'anus (cavité buccale, pharynx, œsophage, estomac, intestin grêle, gros intestin, anus).</li>
<li><b>Les organes annexes :</b> glandes et structures impliquées dans le traitement mécanique et chimique des aliments (dents, langue, glandes salivaires, foie et voies biliaires, pancréas).</li>
</ul>
<p>Les glandes hypophysaires n'en font pas partie : l'hypophyse est une glande endocrine du cerveau.</p>
<p><b>Deux types d'actions :</b> l'action <b>motrice</b> (mécanique : mastication, déglutition, péristaltisme, brassage) et l'action <b>chimique</b> (sécrétions et enzymes). S'y ajoutent l'absorption et l'élimination.</p>

<h3>2. Structure générale de la paroi du tube digestif</h3>
<p>De l'œsophage au canal anal, la paroi comporte <b>4 couches concentriques</b> (de l'intérieur vers l'extérieur) :</p>
<ol>
<li><b>La muqueuse :</b> épithélium de revêtement au contact de la lumière, reposant sur le <i>lamina propria</i> (tissu conjonctif) et une mince couche musculaire, la <i>muscularis mucosae</i>.</li>
<li><b>La sous-muqueuse :</b> tissu conjonctif lâche riche en vaisseaux sanguins et lymphatiques. Elle contient le <b>plexus nerveux de Meissner</b> (contrôle des sécrétions).</li>
<li><b>La musculeuse :</b> deux couches de muscle lisse, l'une interne <b>circulaire</b> (réduit le diamètre) et l'autre externe <b>longitudinale</b> (raccourcit le segment). Entre les deux se trouve le <b>plexus nerveux d'Auerbach</b> (contrôle le péristaltisme).</li>
<li><b>La séreuse ou l'adventice :</b> couche externe. La séreuse forme le feuillet viscéral du péritoine ; l'adventice (tissu conjonctif) recouvre les portions rétropéritonéales. <b>L'œsophage a une adventice, pas de séreuse.</b></li>
</ol>

<h3>3. Paroi abdominale et régions de l'abdomen</h3>
<p>La paroi abdominale antérieure est divisée en <b>9 régions</b> (3 étages × 3) :</p>
<table>
<tr><th>Étage</th><th>Droite</th><th>Centre</th><th>Gauche</th></tr>
<tr><td>Supérieur</td><td>Hypochondre droit</td><td>Épigastre</td><td>Hypochondre gauche</td></tr>
<tr><td>Moyen</td><td>Flanc droit</td><td>Région ombilicale</td><td>Flanc gauche</td></tr>
<tr><td>Inférieur</td><td>Fosse iliaque droite</td><td>Hypogastre</td><td>Fosse iliaque gauche</td></tr>
</table>
<ul>
<li><b>Estomac :</b> épigastre et hypochondre gauche. <b>Foie :</b> hypochondre droit. <b>Cæcum et appendice :</b> fosse iliaque droite (même région).</li>
<li><b>Muscles de la paroi ventro-latérale :</b> muscle droit, obliques (externe et interne) et transverse. Le <b>psoas</b> appartient à la paroi postérieure.</li>
</ul>

<h3>4. Cavité buccale, dents et langue</h3>
<ul>
<li><b>Cavité buccale :</b> délimitée par les lèvres, les joues, le palais (dur en avant, mou en arrière) et le plancher buccal. Elle abrite la langue et les dents. Rôles : ingestion, mastication, insalivation, début de la digestion.</li>
<li><b>Dents :</b> 32 chez l'adulte (8 incisives, 4 canines, 8 prémolaires, 12 molaires), ancrées dans les alvéoles dentaires du maxillaire et de la mandibule.</li>
<li><b>Langue :</b> organe musculaire composé de muscles intrinsèques et extrinsèques, recouvert de papilles gustatives et filiformes.</li>
<li><b>Artères :</b> branches de la carotide externe. L'artère buccale naît de l'artère maxillaire, elle-même branche de la carotide externe.</li>
<li><b>Veines :</b> elles se drainent dans la veine <b>jugulaire interne</b>.</li>
</ul>

<h3>5. Glandes salivaires</h3>
<p>Trois paires de grandes glandes exocrines :</p>
<ol>
<li><b>Parotides :</b> en avant de l'oreille ; leur canal excréteur (<b>canal de Sténon</b>) s'ouvre en regard de la 2<sup>e</sup> molaire supérieure.</li>
<li><b>Submandibulaires :</b> sous le plancher de la bouche ; le <b>canal de Wharton</b> s'ouvre à la base du frein de la langue.</li>
<li><b>Sublinguales :</b> sous la langue ; elles s'ouvrent par plusieurs petits canaux.</li>
</ol>
<p><b>Fonctions de la salive :</b> amorcer la digestion (amylase, lipase), lubrifier le bol alimentaire et nettoyer la cavité buccale.</p>

<h3>6. Pharynx</h3>
<ul>
<li>Carrefour aéro-digestif, siège de la <b>déglutition</b>. Seules les parties oropharyngée et laryngopharyngée sont empruntées par le bol alimentaire.</li>
<li>Innervé par le nerf glosso-pharyngien (IX) et le nerf pneumogastrique ou vague (X).</li>
</ul>

<h3>7. Œsophage</h3>
<ul>
<li>Conduit musculo-membraneux d'environ <b>25 cm</b> de long et 2 cm de diamètre, en position rétrosternale, qui relie le pharynx à l'estomac.</li>
<li><b>Trajet :</b> portion cervicale (cou), portion thoracique (thorax), puis traversée du diaphragme par le <b>hiatus œsophagien</b> à hauteur de T10 pour rejoindre l'estomac (portion abdominale).</li>
<li><b>Sphincters :</b>
<ul>
<li><b>Sphincter supérieur (SSO) :</b> muscle strié, au niveau du muscle cricopharyngien.</li>
<li><b>Sphincter inférieur (SIO) :</b> zone de haute pression fonctionnelle au cardia, qui empêche le reflux gastro-œsophagien.</li>
</ul></li>
<li><b>Tuniques :</b> muqueuse, sous-muqueuse, musculeuse et <b>adventice</b> (pas de séreuse).</li>
<li><b>Fonctions :</b> transport du bol alimentaire par péristaltisme et système anti-reflux.</li>
<li><b>Drainage veineux :</b> au tiers inférieur, les veines rejoignent la veine porte et la veine cave : c'est une <b>anastomose porto-cave</b> (varices œsophagiennes en cas d'hypertension portale).</li>
</ul>

<h3>8. Estomac</h3>
<ul>
<li>Organe creux en forme de « J », dans l'épigastre et l'hypochondre gauche, d'une capacité de 1,5 à 2 litres. Ce n'est <b>pas une glande</b> : c'est un réservoir qui contient des glandes gastriques.</li>
<li><b>Deux orifices :</b> le <b>cardia</b> (jonction avec l'œsophage) et le <b>pylore</b> (sphincter musculaire lisse qui régule la vidange vers le duodénum). L'antre est une portion de l'estomac, pas un orifice.</li>
<li><b>Subdivisions :</b>
<ul>
<li><b>Fundus</b> (gros cul-de-sac) : dôme supérieur sous le diaphragme, où se stockent les gaz ;</li>
<li><b>Corps</b> : partie centrale et principale ;</li>
<li><b>Antre pylorique</b> : partie inférieure rétrécie menant au pylore.</li>
</ul></li>
<li><b>Courbures :</b> petite courbure (bord droit) et grande courbure (bord gauche).</li>
<li><b>Suc gastrique :</b> acide chlorhydrique, pepsine, mucus, facteur intrinsèque, avec la gastrine qui stimule la sécrétion. Il ne contient ni bile (d'origine hépatique) ni endorphine.</li>
<li><b>Innervation :</b> nerf vague (X), parasympathique.</li>
<li><b>Fonctions :</b> réservoir des aliments, broyage et malaxage, digestion du bol alimentaire en chyme. L'absorption y est très faible.</li>
</ul>

<h3>9. Intestin grêle</h3>
<p>Segment le plus long du tube digestif, plié en anses intestinales : environ <b>6 à 7 mètres</b> sur le cadavre, et environ <b>3 mètres chez le vivant</b> (tonus musculaire). Le « titanium » n'existe pas.</p>
<table>
<tr><th>Segment</th><th>Longueur approximative</th><th>Caractéristiques</th></tr>
<tr><td><b>Duodénum</b></td><td>~25 cm (forme de C)</td><td>Fixe, enroulé autour de la tête du pancréas. Reçoit la bile et le suc pancréatique à l'<b>ampoule de Vater</b> (papille duodénale majeure).</td></tr>
<tr><td><b>Jéjunum</b></td><td>~2,5 m</td><td>Partie supérieure mobile, plus large, paroi épaisse et très vascularisée. Plis circulaires (valvules conniventes) très développés.</td></tr>
<tr><td><b>Iléon</b></td><td>~3,5 m</td><td>Partie inférieure mobile, terminée par la jonction iléo-cæcale (valve de Bauhin). Plaques de Peyer (tissu lymphoïde).</td></tr>
</table>
<ul>
<li><b>Fonctions :</b> brassage du chyme et des enzymes, puis <b>absorption des nutriments</b>.</li>
<li><b>Vascularisation :</b> artère mésentérique <b>supérieure</b> (branches jéjunales et iléales), et non la mésentérique inférieure.</li>
</ul>

<h3>10. Gros intestin : côlon, rectum et anus</h3>
<p>Long d'environ 1,5 m, il encadre l'intestin grêle. Il se reconnaît à ses <b>bandelettes longitudinales</b> (<i>taeniae coli</i>), ses <b>haustrations</b> (bosselures) et ses <b>franges épiploïques</b> (sacs graisseux).</p>
<ul>
<li><b>Cæcum et appendice vermiforme :</b> cul-de-sac de la fosse iliaque droite, sous la valve iléo-cæcale. L'appendice est un diverticule lymphoïde de 8 à 10 cm suspendu au cæcum.</li>
<li><b>Côlon : 4 segments</b> (et non 5) :
<ul>
<li><b>ascendant (droit)</b> : monte jusqu'au foie (angle hépatique) ;</li>
<li><b>transverse</b> : traverse l'abdomen jusqu'à la rate (angle splénique) ;</li>
<li><b>descendant (gauche)</b> : descend le long du flanc gauche ;</li>
<li><b>sigmoïde</b> : boucle en « S » qui débouche dans le bassin.</li>
</ul></li>
<li><b>Division du côlon en deux :</b> côlon droit (artère mésentérique supérieure) et côlon gauche (artère mésentérique inférieure).</li>
<li><b>Fonctions du côlon :</b> faire progresser le contenu par péristaltisme et former les matières fécales (bol fécal).</li>
<li><b>Rectum :</b> canal fixe d'environ <b>12 à 15 cm</b> (15 cm dans l'exercice), qui débute en S3. Il se compose de l'<b>ampoule rectale</b> et du <b>canal anal</b>. Le rectum stocke les selles.</li>
<li><b>Canal anal :</b> portion terminale de <b>3 à 4 cm</b> (environ 4 cm sur le cadavre, plus court chez le vivant), avec deux sphincters : le <b>sphincter interne</b> (involontaire, muscle lisse) et le <b>sphincter externe</b> (volontaire, muscle strié).</li>
<li><b>Anus :</b> assure la <b>continence</b> et l'<b>évacuation contrôlée</b> des selles. Une anastomose porto-cave existe au niveau du canal anal.</li>
</ul>

<h3>11. Foie et voies biliaires</h3>
<p>Le foie est la plus grosse glande de l'organisme (~1,5 kg), dans l'hypochondre droit.</p>
<ul>
<li><b>Anatomie externe :</b> vu de face, 2 lobes principaux (<b>droit</b> et <b>gauche</b>, séparés par le ligament falciforme) ; vu de dessous, 2 lobes accessoires (<b>carré</b> et <b>caudé</b>). Dans la segmentation (8 segments), le <b>segment I</b> est le <b>lobe caudé</b>.</li>
<li><b>Unité fonctionnelle :</b> le <b>lobule hépatique</b>, de forme hexagonale.</li>
<li><b>Fonctions :</b> sécrétion de la bile par les <b>hépatocytes</b> (en continu), métabolisme des glucides, lipides et <b>protéines</b>, stockage, et <b>protection par détoxication</b>. Il ne stocke pas d'enzymes salivaires.</li>
<li><b>Voie biliaire principale :</b> les canalicules biliaires convergent vers les canaux hépatiques droit et gauche, qui forment le <b>canal hépatique commun</b>. Celui-ci s'unit au canal cystique pour former le canal <b>cholédoque</b>, qui s'abouche dans le duodénum.</li>
<li><b>Voie biliaire accessoire :</b> la <b>vésicule biliaire</b> (réservoir sous le foie), reliée par le <b>canal cystique</b>. Elle n'appartient pas à la voie principale.</li>
</ul>

<h3>12. Pancréas</h3>
<p>Glande mixte de 12 à 15 cm de long, étalée transversalement en arrière de l'estomac (rétropéritonéale).</p>
<ul>
<li><b>Parties :</b> tête (encastrée dans le C duodénal), col, corps et queue (vers la rate). L'antre n'en fait pas partie : il appartient à l'estomac.</li>
<li><b>Fonction exocrine :</b> les cellules acineuses et centro-acineuses fabriquent le suc pancréatique.</li>
<li><b>Fonction endocrine :</b> les îlots de Langerhans sécrètent l'insuline (cellules bêta). L'insuline ne vient donc pas des cellules acineuses.</li>
<li><b>Canaux :</b> le <b>canal de Wirsung</b> (principal) traverse la glande et s'unit au cholédoque à l'ampoule de Vater ; le <b>canal de Santorini</b> (accessoire) s'ouvre plus haut, à la papille duodénale mineure.</li>
<li><b>Innervation :</b> le plexus cœliaque (solaire) apporte les fibres sympathiques et sensitives.</li>
</ul>

<h3>13. Vascularisation artérielle et veineuse</h3>
<p>Les organes digestifs abdominaux sont vascularisés par trois branches de l'<b>aorte abdominale</b> :</p>
<table>
<tr><th>Artère</th><th>Territoire</th></tr>
<tr><td><b>Tronc cœliaque</b></td><td>Estomac, foie, rate, duodénum, pancréas</td></tr>
<tr><td><b>Mésentérique supérieure</b></td><td>Reste de l'intestin grêle, cæcum, côlon ascendant et 2/3 du côlon transverse</td></tr>
<tr><td><b>Mésentérique inférieure</b></td><td>1/3 restant du côlon transverse, côlon descendant, sigmoïde et partie supérieure du rectum</td></tr>
</table>
<p><b>Drainage veineux (système porte) :</b></p>
<ul>
<li>Le sang chargé en nutriments (estomac, intestins, rate, pancréas) est collecté par la <b>veine porte</b>, formée par la réunion de la veine mésentérique supérieure et de la veine splénique. Elle draine tout le tube digestif intra-abdominal vers le foie.</li>
<li>Après filtration et métabolisation dans le foie, le sang rejoint la circulation générale par les <b>veines sus-hépatiques</b>.</li>
<li><b>Anastomoses porto-caves :</b> au tiers inférieur de l'<b>œsophage</b> et au niveau du <b>canal anal</b> (et non au milieu de l'œsophage).</li>
</ul>

<h3>14. Péritoine</h3>
<p>Grande membrane séreuse à deux feuillets :</p>
<ul>
<li><b>Feuillet pariétal :</b> tapisse la paroi abdominale.</li>
<li><b>Feuillet viscéral :</b> recouvre la surface des organes abdominaux.</li>
<li>Entre les deux, la <b>cavité péritonéale</b> est un espace virtuel qui contient un film lubrifiant.</li>
<li>Replis de soutien : le <b>mésentère</b> (attache l'intestin grêle à la paroi postérieure) et le grand et le petit <b>épiploon</b> (omentum).</li>
</ul>

<h3>15. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>Intestin grêle vascularisé par la mésentérique inférieure</td><td>Mésentérique supérieure</td></tr>
<tr><td>Côlon en 5 segments</td><td>4 segments</td></tr>
<tr><td>Estomac : cardia et antre</td><td>Cardia et pylore</td></tr>
<tr><td>L'estomac est une glande</td><td>Organe creux avec des glandes</td></tr>
<tr><td>Insuline : cellules acineuses</td><td>Îlots de Langerhans (cellules bêta)</td></tr>
<tr><td>Veines buccales : jugulaire externe</td><td>Jugulaire interne</td></tr>
<tr><td>Œsophage : tunique séreuse</td><td>Adventice, pas de séreuse</td></tr>
<tr><td>Œsophage de 21 cm</td><td>Environ 25 cm</td></tr>
<tr><td>Vésicule : voie biliaire principale</td><td>Voie biliaire accessoire</td></tr>
<tr><td>Psoas : paroi ventro-latérale</td><td>Paroi postérieure</td></tr>
<tr><td>Anastomose au milieu de l'œsophage</td><td>Tiers inférieur de l'œsophage</td></tr>
<tr><td>Appareil digestif avec glandes hypophysaires</td><td>Glandes annexes : salivaires, foie, pancréas</td></tr>
</table>
` },

"ped": { html: `
<div class="retenir"><b>Fiche élaborée d'après le cours officiel de pédiatrie (Licence 1 IDE/SF, UFR Sciences Médicales), le résumé pour le diplôme d'État et les évaluations.</b> Si votre cours officiel indique d'autres valeurs, c'est lui qui fait foi.</div>

<h3>1. Généralités sur la pédiatrie</h3>
<ul>
<li><b>Pédiatrie :</b> branche de la médecine consacrée à l'enfant (développement, physiologie normale, maladies infantiles). <b>Néonatologie :</b> branche de la pédiatrie consacrée au fœtus et au nouveau-né.</li>
<li><b>Groupes d'enfants :</b> nouveau-né 0 à 28 jours ; nourrisson 1 à 23 mois ; enfant préscolaire 2 à 5 ans ; enfant 6 à 12 ans ; adolescent 13 à 18 ans.</li>
<li><b>Besoins de l'enfant :</b> alimentation, développement (croissance et développement psychomoteur), protection, éducation.</li>
<li><b>Principales maladies :</b> nouveau-né : infection bactérienne, prématurité, détresse respiratoire, ictère, asphyxie périnatale ; nourrissons et enfants : paludisme, infections respiratoires aiguës, gastro-entérite, malnutrition, méningite, anémie, VIH/sida ; adolescents : paludisme, VIH/sida, accidents, drépanocytose, cancer.</li>
<li><b>Acteurs :</b> parents, enfant, agents de santé, communauté.</li>
<li><b>Côte d'Ivoire (2016) :</b> 23 740 424 habitants ; 0-14 ans : 38 % ; natalité 28,2 ‰ ; mortalité globale 9,5 ‰ ; mortalité infantile 57,2 ‰.</li>
</ul>

<h3>2. Nouveau-né normal</h3>
<p>Le nouveau-né normal (90 % des naissances) est issu d'une grossesse et d'un accouchement sans incident, sans traumatisme ni malformation.</p>
<ul>
<li><b>Étapes :</b> œuf (0 à 8<sup>e</sup> jour), embryon (8<sup>e</sup> au 90<sup>e</sup> jour), fœtus (90<sup>e</sup> jour à la naissance), nouveau-né (J0 à J28).</li>
<li><b>3 feuillets de l'embryon :</b> <b>ectoblaste</b> (tissu nerveux, peau) ; <b>mésoblaste</b> (cœur, vaisseaux, muscles, tissu conjonctif, reins, gonades) ; <b>endoblaste</b> (glandes, épithélium respiratoire, muqueuse intestinale).</li>
<li><b>Bilan prénatal :</b> hémogramme, électrophorèse de l'hémoglobine, groupe sanguin ABO/rhésus, glycémie, sérologies VIH, toxoplasmose, rubéole, syphilis, et échographie aux 1<sup>er</sup>, 2<sup>e</sup> et 3<sup>e</sup> trimestres.</li>
<li><b>Prophylaxies de la gestante :</b> fer et acide folique (vitamine B9, qui prévient les malformations comme le spina bifida), antipaludique, vaccin antitétanique.</li>
</ul>
<table>
<tr><th>Paramètre</th><th>Valeur normale</th></tr>
<tr><td>Coloration</td><td>Rose, quatre membres en flexion (position W, M)</td></tr>
<tr><td>Poids / taille / PC</td><td>2 500 à 4 000 g (moyenne 3 500 g) / 46 à 54 cm / 33 à 37 cm</td></tr>
<tr><td>Fréquence respiratoire</td><td>40 à 60 cycles/min</td></tr>
<tr><td>Fréquence cardiaque</td><td>100 à 160 battements/min</td></tr>
<tr><td>APGAR</td><td>8 à 10 à 5 minutes</td></tr>
<tr><td>Signes de maturité</td><td>Strie plantaire sur plus des 2/3 antérieurs ; nodule mammaire supérieur à 4 mm ; lobule de l'oreille bien ourlé ; testicules dans les bourses striées (garçon) ; grandes lèvres recouvrant les petites (fille)</td></tr>
</table>
<ul>
<li><b>Première selle :</b> le méconium. <b>Premières urines :</b> dans les premières 24 heures.</li>
<li><b>Crise génitale :</b> gonflement des seins, écoulement de liquide blanchâtre par le sexe chez la fille (due à la prolactine).</li>
<li><b>Soins propres :</b> collyre dans les yeux, vitamine K1 1 mg en IM, soins du cordon (chlorhexidine), aider la mère à mettre le nouveau-né au sein. <b>Soins délégués :</b> sérum anti-D si la mère est rhésus négatif et le bébé rhésus positif. <b>Collaboration :</b> groupage du nouveau-né. <b>Conseils :</b> CPN, MILDA, allaitement exclusif. Fer à J8 de vie.</li>
</ul>

<h3>3. Examen du nouveau-né et réanimation en salle de naissance</h3>
<p><b>Précautions :</b> salle éclairée et calme, lavage des mains, lampe chauffante ou table radiante, nouveau-né dévêtu, gants propres. On interroge d'abord le carnet de santé : nombre de CPN, DDR, bilans, prophylaxies, pathologies de la grossesse, travail, terme, voie d'accouchement, APGAR, mensurations.</p>
<table>
<tr><th>Score d'APGAR</th><th>0</th><th>1</th><th>2</th></tr>
<tr><td><b>A</b>spect (couleur)</td><td>Cyanose ou pâleur généralisée</td><td>Cyanose des extrémités</td><td>Rose partout</td></tr>
<tr><td><b>P</b>ouls</td><td>0</td><td>Moins de 100/min</td><td>Plus de 100/min</td></tr>
<tr><td><b>G</b>rimace (cri)</td><td>Absence</td><td>Grimace ou geignement</td><td>Cri</td></tr>
<tr><td><b>A</b>ctivité (tonus)</td><td>Hypotonie</td><td>Flexion des extrémités</td><td>Quadriflexion</td></tr>
<tr><td><b>R</b>espiration</td><td>Absente</td><td>Irrégulière</td><td>Régulière</td></tr>
</table>
<ul>
<li>À l'issue de l'examen : nouveau-né normal ou anormal (à risque, traumatisme obstétrical, malformations évidentes : spina bifida, pieds bots, omphalocèle, fente labio-palatine, imperforation anale, hydrocéphalie…).</li>
<li><b>Réanimation :</b> c'est ressusciter un enfant de 0 à 28 jours en détresse vitale. <b>On n'utilise pas l'APGAR pour décider de la réanimation, mais la « minute d'or »</b> (absence de respiration, hypotonie, absence de cri). On sèche l'enfant, on lui met un bonnet, on dégage les voies aériennes, on ventile si besoin et on <b>concentre les efforts sur les poumons</b>. Le clampage du cordon à 1 minute prévient l'anémie. On ne tape pas la plante du pied.</li>
<li><b>0 à 60 min de vie :</b> mise au sein précoce, température prise 4 fois (toutes les 15 min). <b>60 à 90 min (soins essentiels) :</b> vitamine K1 IM, collyre antiseptique, soins du cordon à la chlorhexidine, poids, examen du bébé, température.</li>
</ul>

<h3>4. Détresse respiratoire du nouveau-né</h3>
<ul>
<li>Gravité évaluée par le <b>score de Silverman</b> (signes de lutte respiratoire) ; examens : radiographie du thorax, gazométrie, hémogramme, hémoculture, CRP.</li>
<li><b>Causes :</b> maladie des membranes hyalines (déficit de surfactant, prématuré) ; retard de résorption du liquide alvéolaire (césarienne avant travail) ; inhalation de liquide amniotique (accouchement difficile ou dystocique) ; cause infectieuse.</li>
<li>Débit d'oxygène : 0,5 à 1 L/min.</li>
</ul>

<h3>5. Nouveau-né prématuré et hypotrophe</h3>
<ul>
<li><b>Prématuré :</b> âge gestationnel inférieur à 37 SA. Petit : 35 à 37 SA ; moyen : 33 à 35 SA ; grand : 28 à 33 SA ; extrême : 22 à 28 SA. Causes médicales ou provoquées, ou spontanées d'origine maternelle ou fœtale.</li>
<li><b>Signes :</b> lanugo, vernix caseosa abondant, cartilage de l'oreille peu développé, peau fine.</li>
<li><b>Problèmes :</b> souffrance cérébrale, détresse respiratoire (maladie des membranes hyalines), hypothermie, infections, hémorragie, hypoglycémie (principale complication métabolique), hypocalcémie, troubles digestifs (entérocolite).</li>
<li><b>Devenir :</b> séquelles neurologiques, respiratoires ; retard pondéral rattrapé entre le 3<sup>e</sup> et le 6<sup>e</sup> mois ; mortalité de 25 à 50 % en Afrique.</li>
<li><b>Rôles de soins :</b> incubateur ou table chauffante, peau à peau (<b>soins mère kangourou</b>, contact permanent ou intermittent), sonde naso-gastrique, gavage (pousse-seringue pour le gavage continu), oxygène, perfusion, constantes.</li>
<li><b>Critères de sortie :</b> bonne succion, prise de poids régulière, température normale, respiration et coloration normales, fréquence cardiaque normale, urines et selles normales, ne vomit pas.</li>
<li><b>Hypotrophe :</b> nouveau-né à terme de poids inférieur à 2 500 g ; harmonieux (poids, taille et PC anormaux) ou dysharmonieux (taille et PC normaux, poids anormal).</li>
<li>Fer à J8 de vie pour le prématuré et l'hypotrophe.</li>
</ul>

<h3>6. Infection bactérienne du nouveau-né</h3>
<table>
<tr><th></th><th>Précoce (materno-fœtale)</th><th>Tardive (post-natale)</th></tr>
<tr><td>Début</td><td>7 jours de vie ou moins</td><td>Plus de 7 jours</td></tr>
<tr><td>Germe</td><td>Streptocoque B</td><td>Staphylocoque doré</td></tr>
<tr><td>Contamination</td><td>Voie basse (surtout), voie hématogène</td><td>Mains sales, gestes septiques, soins du cordon</td></tr>
<tr><td>Traitement</td><td>Amoxicilline ou ampicilline + aminoside (gentamicine, nétilmicine)</td><td>Ceftriaxone ou céfotaxime + aminoside</td></tr>
</table>
<p>Examen de certitude : l'hémoculture.</p>

<h3>7. Maladie hémorragique du nouveau-né</h3>
<ul>
<li>Saignement par déficit en <b>vitamine K1</b> ou en facteurs vitamine K dépendants (II, VII, IX, X). Fréquence : 1 à 2 cas pour 100 naissances ; pic entre J2 et J3, rare après J10.</li>
<li><b>Facteurs favorisants :</b> race noire, grossesse difficile, prématurité, allaitement maternel exclusif.</li>
<li><b>Manifestations :</b> méléna, saignements. <b>Examen de certitude :</b> temps de Quick (TP) et TCK.</li>
<li><b>Prévention :</b> poids supérieur ou égal à 1 500 g : vitamine K1 1 mg en IM ; poids inférieur à 1 500 g : 0,5 mg en IM. <b>Curatif :</b> 10 mg de vitamine K1 en IV, quel que soit le poids.</li>
</ul>

<h3>8. Allaitement maternel</h3>
<ul>
<li><b>Allaitement exclusif :</b> lait maternel seul de 0 à 6 mois, sans eau ni jus (23 % en Côte d'Ivoire). <b>Prépondérant :</b> lait maternel plus eau ou jus. <b>Mixte :</b> sein plus biberon. <b>Mise au sein précoce :</b> dans la première heure de vie (36 % en Côte d'Ivoire).</li>
<li><b>Prolactine :</b> hypophyse antérieure ; agit sur les cellules épithéliales des acini (production du lait) ; stimulée par la succion du mamelon.</li>
<li><b>Ocytocine :</b> hypophyse postérieure ; agit sur les cellules myoépithéliales (éjection du lait) ; stimulée par la succion, la vue du bébé, le son de sa voix et ses pleurs ; bloquée par l'anxiété, la douleur et le manque de confiance. Elle favorise aussi la contraction utérine.</li>
<li><b>Types de lait :</b> colostrum (J0 à J7, riche en IgA, facteurs de croissance, cytokines, oligosaccharides ; il faut le donner) ; lait de transition (J7 à J21, lipides, lactose, protéines) ; lait mature (après J21, lipides, protéines, glucides, eau).</li>
<li><b>Lait de mère comparé au lait de vache :</b> stérile, sans bactéries pathogènes, avec anticorps et probiotiques, mieux adapté en protéines et en fer.</li>
<li><b>Avantages :</b> croissance harmonieuse, développement cognitif, prévention des maladies, attachement mère-enfant, diminution du risque de décès pour l'enfant et la mère, économique.</li>
<li><b>Modalités OMS :</b> 0 à 6 mois : exclusif ; 6 à 12 mois : sein plus compléments ; 12 à 24 mois : sein plus repas familial ; sevrage définitif à 24 mois.</li>
<li><b>Mère allaitante :</b> 3 repas équilibrés par jour, 1,5 à 2 litres d'eau en dehors des repas, arrêt des stupéfiants (alcool, tabac, drogue). <b>Surveillance :</b> 8 à 9 tétées par jour, prise de poids de 25 à 30 g par jour, selles jaune d'or d'aspect œuf brouillé.</li>
<li><b>Bon positionnement :</b> dos du bébé sur l'avant-bras, nuque dans le pli du coude, ventre contre celui de la mère, bouche au contact du mamelon. <b>Bonne prise du sein :</b> bouche grande ouverte prenant largement l'aréole, menton contre le sein, lèvre inférieure éversée. <b>Tétée efficace :</b> succion lente et profonde entrecoupée de pauses, on entend le bébé déglutir.</li>
<li><b>Problèmes :</b> hypogalactie (soutien psychologique), travail de la mère (tire-lait), engorgement (bain d'eau tiède, antalgique), crevasses (antiseptique, antalgique), abcès (antibiotique après avis médical).</li>
<li><b>VIH :</b> poursuivre l'allaitement si la mère est sous trithérapie ; sevrage à 12 mois si l'enfant n'est pas infecté, à 24 mois sinon.</li>
<li><b>Facteurs de déclin :</b> formules infantiles et leur promotion, activité professionnelle de la mère, manque de soutien psychologique, préoccupation esthétique (régime pour maigrir), retard de la montée laiteuse.</li>
<li><b>Hôpitaux amis des bébés (IHAB) :</b> politique écrite, formation du personnel, information des gestantes, mise au sein dans la première heure, conseils si séparation, allaitement exclusif, bébé avec sa mère 24 h sur 24, allaitement à la demande, ni tétine ni sucette, associations de soutien.</li>
</ul>

<h3>9. Croissance de l'enfant</h3>
<ul>
<li><b>Croissance quantitative (somatique) :</b> augmentation de la taille, du poids et du volume. <b>Qualitative (maturation) :</b> perfectionnement des structures et des fonctions. <b>Facteurs :</b> hérédité, hormones, environnement.</li>
<li><b>Instruments :</b> poids (pèse-bébé avant 2 ans, pèse-personne après) ; taille (toise horizontale avant 2 ans, verticale après) ; périmètre crânien et périmètre brachial (mètre ruban). <b>Maturation :</b> fontanelles, éruption dentaire, points d'ossification.</li>
</ul>
<table>
<tr><th>Âge</th><th>Poids</th><th>Taille</th><th>PC</th></tr>
<tr><td>Naissance</td><td>3 kg</td><td>50 cm</td><td>35 cm</td></tr>
<tr><td>3 mois</td><td>6 kg (poids de naissance × 2)</td><td>65 cm</td><td>41 cm</td></tr>
<tr><td>9 mois</td><td>8 kg</td><td>70 cm</td><td>45 cm (surface corporelle × 2)</td></tr>
<tr><td>12 mois</td><td>9 kg (× 3)</td><td>75 cm</td><td>47 cm</td></tr>
<tr><td>24 mois</td><td>12 kg (× 4)</td><td>85 cm</td><td>48 cm</td></tr>
<tr><td>3 ans</td><td>14 kg</td><td>95 cm</td><td>49 cm (surface corporelle × 3)</td></tr>
<tr><td>4 ans</td><td>16 kg</td><td>100 cm (taille de naissance × 2)</td><td>51 cm</td></tr>
<tr><td>7 ans</td><td>22 kg</td><td>120 cm</td><td>52 cm</td></tr>
<tr><td>10 ans</td><td>30 kg</td><td>135 cm</td><td>53 cm</td></tr>
</table>
<ul>
<li>Après 3 ans, l'enfant prend environ 2 kg par an. Repère : <b>PC = taille/2 + 10</b>.</li>
<li><b>Fontanelle postérieure :</b> fermée à 2-3 mois. <b>Antérieure :</b> fermée à 18 mois. <b>Retard d'éruption dentaire :</b> aucune dent après 15 mois.</li>
<li>Périmètre brachial : un enfant de plus d'un an dont le PB est inférieur à 12 cm est malnutri.</li>
</ul>

<h3>10. Développement psychomoteur (DPM)</h3>
<p>Évalué sur quatre plans : <b>motricité, préhension, langage, compréhension</b>. Facteurs favorables : hérédité, intégrité du système nerveux, environnement. Facteurs limitants : maladies héréditaires, atteintes du système nerveux, ictère nucléaire, maladies métaboliques.</p>
<table>
<tr><th>Âge</th><th>Acquisitions</th></tr>
<tr><td>0-1 mois</td><td>Quadriflexion, réflexe de grasping, attentif au son, sourire aux anges</td></tr>
<tr><td>3 mois</td><td>Tient la tête dans l'axe ; disparition des réflexes archaïques ; émet des sons ; sourire réponse</td></tr>
<tr><td>6 mois</td><td>Assis en trépied ; porte l'objet à la bouche ; lallation ; tend les bras pour être pris</td></tr>
<tr><td>9 mois</td><td>Marche à 4 pattes, debout avec appui ; pince pouce-index ; « da-da, ba-ba » ; fait bravo et au revoir ; peur de l'étranger</td></tr>
<tr><td>12 mois</td><td>Marche avec appui ; introduit et retire un objet d'une boîte ; dit « papa, maman » ; pointe du doigt</td></tr>
<tr><td>15 mois</td><td>Marche seule ; gribouille ; tient la cuillère ; demande les objets en les montrant du doigt</td></tr>
<tr><td>18 mois</td><td>Monte un escalier en se tenant à la rampe ; tape le pied dans le ballon ; place le triangle, le rond, le carré après démonstration ; vocabulaire de 10 à 20 mots ; imite les adultes dans les tâches ménagères</td></tr>
<tr><td>24 mois</td><td>Monte et descend seul l'escalier ; court vite, saute, danse, tourne en cercle ; mange seul ; tour de 6 cubes ; copie un rond ; réunit 2 ou 3 mots ; explosion du vocabulaire ; exécute des ordres en 2 parties</td></tr>
<tr><td>3 ans</td><td>Monte et descend les escaliers comme un adulte ; s'habille seul (aide pour boutons et fermetures) ; âge du « pourquoi ? » et du « non » ; dit son nom et son âge ; connaît son sexe ; dessine un bonhomme têtard ; propreté diurne et nocturne</td></tr>
<tr><td>4 ans</td><td>Bicyclette sans roulettes ; s'habille seul sauf les lacets ; connaît les couleurs ; copie un carré ; jeux en groupe</td></tr>
<tr><td>6-10 ans</td><td>Lace ses chaussures ; dessine un triangle ; début de l'écriture ; connaît sa droite et sa gauche, son adresse</td></tr>
</table>

<h3>11. Diarrhée aiguë et déshydratation</h3>
<ul>
<li><b>Diarrhée :</b> au moins 3 selles molles ou liquides par 24 h. <b>Aiguë :</b> moins de 14 jours ; <b>persistante :</b> 14 à 21 jours ; <b>chronique :</b> plus de 21 jours.</li>
<li><b>Causes :</b> infectieuses (virus, surtout le <b>rotavirus</b> ; bactéries, surtout la shigelle) ; non infectieuses (stress, erreur diététique, antibiotiques). Une selle semi-liquide chez l'enfant nourri au sein n'est pas une diarrhée. <b>On n'impose pas la diète.</b></li>
<li><b>Problèmes :</b> déshydratation, dénutrition, hygiène.</li>
</ul>
<table>
<tr><th></th><th>Plan A (pas de signes)</th><th>Plan B (signes évidents)</th><th>Plan C (signes sévères)</th></tr>
<tr><td>État général</td><td>Normal</td><td>Agité, irritable</td><td>Léthargique ou inconscient</td></tr>
<tr><td>Yeux / larmes</td><td>Normaux / présentes</td><td>Enfoncés / absentes</td><td>Très enfoncés / absentes</td></tr>
<tr><td>Bouche</td><td>Humide</td><td>Sèche</td><td>Très sèche</td></tr>
<tr><td>Soif</td><td>Pas de soif</td><td>Boit avec avidité</td><td>Incapable de boire</td></tr>
<tr><td>Pli cutané</td><td>S'efface rapidement</td><td>S'efface lentement</td><td>S'efface très lentement</td></tr>
</table>
<ul>
<li><b>Plan A :</b> moins de 24 mois : 500 ml de SRO par jour (50 à 100 ml après chaque selle) ; 2 à 10 ans : 1 000 ml/jour (100 à 200 ml) ; plus de 10 ans : 2 000 ml/jour, à volonté.</li>
<li><b>Plan B :</b> SRO, <b>75 ml/kg en 4 heures</b>, puis réévaluation (retour au plan A si les signes disparaissent, plan B reconduit s'ils persistent, plan C s'ils s'aggravent). Exemples : 8 kg : 600 ml ; 9 kg : 675 ml.</li>
<li><b>Plan C (voie parentérale) :</b> moins d'un an : 30 ml/kg en 1 h puis 70 ml/kg en 5 h ; plus d'un an : 30 ml/kg en 30 min puis 70 ml/kg en 2 h 30. Soluté idéal : <b>Ringer lactate</b> ; à défaut, sérum glucosé isotonique à 5 %. Exemple (9 kg, moins d'un an) : 270 ml puis 630 ml, soit 900 ml.</li>
<li>Poursuivre l'alimentation. <b>Zinc</b> comprimé à 20 mg pendant 10 jours : 0 à 6 mois : un demi-comprimé (10 mg) par jour ; 6 mois à 5 ans : 1 comprimé (20 mg) par jour.</li>
</ul>

<h3>12. Vomissements du nourrisson</h3>
<ul>
<li>Rejet actif par la bouche d'une partie ou de la totalité du contenu gastrique, avec participation du diaphragme. À ne pas confondre avec la régurgitation, le mérycisme et la vomique.</li>
<li><b>Causes :</b> aiguës (erreur diététique, infections…) ou habituelles et chroniques (par exemple sténose hypertrophique du pylore).</li>
<li><b>Complications :</b> déshydratation, dénutrition, fausse route (risque d'asphyxie).</li>
<li>Les anti-vomissements (métopimazine, Vogalène) peuvent provoquer un <b>syndrome extrapyramidal</b> : protrusion de la langue, déviation des yeux, hypertonie.</li>
</ul>

<h3>13. Fièvre de l'enfant</h3>
<ul>
<li><b>Définition :</b> température rectale supérieure à 37 °C le matin et 38 °C le soir. Température normale : 36 à 37,5 °C. Thermomètre électronique recommandé (pas de mercure). Hyperthermie : plus de 40 °C.</li>
<li><b>Complications :</b> convulsion, déshydratation, hyperthermie majeure.</li>
<li><b>Classification :</b> aiguë (moins de 8 jours), prolongée (8 à 30 jours), chronique (plus de 30 jours) ; modérée (37 à 38 °C), élevée (38 à 40 °C).</li>
<li><b>Bonne tolérance :</b> faciès vultueux, cri vigoureux, téguments chauds et érythrosiques, TRC inférieur à 3 secondes, conscience normale. <b>Mauvaise tolérance :</b> pâleur, cyanose péribuccale, cri plaintif, marbrures, extrémités froides, TRC supérieur à 3 secondes, conscience altérée.</li>
<li><b>Moyens physiques (rôle propre) :</b> déshabiller l'enfant, éviter de le couvrir, aérer la pièce, le faire boire souvent.</li>
<li><b>Médicaments (rôle délégué) :</b> <b>paracétamol</b> 60 mg/kg/jour en 3-4 prises (15 mg/kg par prise), voie orale, IV ou rectale ; ibuprofène 7 à 10 mg/kg en 3 prises ; aspirine 50 à 60 mg/kg en 3 prises. Le paracétamol est le plus recommandé ; ibuprofène et aspirine aggravent la varicelle.</li>
</ul>

<h3>14. Paludisme de l'enfant</h3>
<ul>
<li>Maladie parasitaire des globules rouges due à <i>Plasmodium falciparum</i>, transmise par l'anophèle femelle ; touche surtout les enfants de moins de 5 ans.</li>
<li><b>Paludisme simple :</b> fièvre, frissons, courbatures, céphalées, vomissements, diarrhée.</li>
<li><b>Paludisme grave :</b> modification du comportement, confusion, somnolence, convulsions répétées, coma, prostration, ictère, détresse respiratoire, état de choc ; biologie : hypoglycémie, Hb inférieure à 7 g/dl, acidose, hyperlactatémie, hémoglobinurie, hyperparasitémie, insuffisance rénale. Formes les plus fréquentes : neurologique et anémique.</li>
<li><b>Diagnostic :</b> goutte épaisse et frottis sanguin ; à défaut TDR. <b>Traitement simple :</b> artéméther + luméfantrine ou artésunate + amodiaquine. <b>Grave (hôpital) :</b> artésunate injectable, artéméther injectable ou quinine en perfusion.</li>
</ul>

<h3>15. Anémie de l'enfant</h3>
<ul>
<li>Hémoglobine inférieure à 11 g/dl. Modérée : 7 à 11 g/dl ; sévère : inférieure à 7 g/dl. Aiguë : 14 jours ou moins ; chronique : plus de 14 jours.</li>
<li><b>Microcytaire hypochrome :</b> carence en fer. <b>Normocytaire normochrome :</b> paludisme. <b>Macrocytaire normochrome :</b> carence en acide folique (vitamine B9).</li>
<li>Débit de transfusion : quantité (ml) / (4 × heures) = gouttes par minute. La drépanocytose est une cause d'anémie.</li>
</ul>

<h3>16. Malnutrition de l'enfant</h3>
<table>
<tr><th></th><th>Kwashiorkor</th><th>Marasme</th></tr>
<tr><td>Âge / début</td><td>Pic de 18 à 36 mois ; début brutal (sevrage brutal ou maladie récente)</td><td>Pic vers 12 mois ; début progressif (mauvaise diversification, nutriments insuffisants en quantité et en qualité)</td></tr>
<tr><td>Signes</td><td>Anorexie, enfant grognon, bouffissure du visage, œdèmes, ulcérations et desquamations, cheveux roux</td><td>Retard pondéral, fonte graisseuse et musculaire (« flotte dans sa peau »), faciès de vieillard, alopécie, amaigrissement, appétit conservé</td></tr>
</table>
<ul>
<li>Le <b>Z-score</b> sert à diagnostiquer la malnutrition (poids/taille : aiguë ; taille/âge : chronique). Problèmes : hypoglycémie, déshydratation (50 à 80 % des décès).</li>
<li><b>Réhabilitation :</b> UNT (malnutrition aiguë sévère avec complications) ; UNTA (sévère sans complications) ; CNS (malnutrition aiguë modérée).</li>
<li><b>Mélanges INSP d'Adjamé :</b> mélange I : 6 volumes de lait entier en poudre + 2 de sucre + 1 d'huile ; mélange II : 5 de lait + 2 de farine + 2 de sucre + 1 d'huile (nécessite une cuisson). <b>F75 :</b> 410 g dans 2 L d'eau, phase d'initiation. <b>F100 :</b> 456 g dans 2,7 L, phase de récupération.</li>
</ul>

<h3>17. Infections respiratoires aiguës (IRA)</h3>
<ul>
<li>2<sup>e</sup> cause de consultation et de décès après le paludisme en Côte d'Ivoire ; surtout avant 5 ans. <b>Avant 3 ans : essentiellement virales (pas d'antibiotique) ; après 3 ans : souvent bactériennes.</b> Prévention : hygiène et vaccination. Facteurs de gravité : âge inférieur à 2 mois, prématurité, immunodépression. Fumée de bois : facteur favorisant.</li>
<li>Virus : coronavirus, virus respiratoire syncitial (VRS), para-influenzae, rhinovirus. Bactéries : pneumocoque, <i>Haemophilus influenzae</i>, mycoplasme.</li>
</ul>
<table>
<tr><th>Maladie</th><th>Âge</th><th>Germe</th><th>Signes</th><th>Antibiotique</th></tr>
<tr><td>Rhinopharyngite (haut)</td><td>6 mois à 3 ans</td><td>VRS</td><td>Rhume, fièvre, obstruction nasale, mal de gorge, ganglions du cou. Complications : otite, bronchite</td><td>Non</td></tr>
<tr><td>Angine (haut)</td><td>4 à 10 ans</td><td>Streptocoque A</td><td>Fièvre, vomissements, mal de gorge, enduit blanchâtre. Complication : RAA</td><td>Oui</td></tr>
<tr><td>Otite moyenne aiguë (haut)</td><td>8 mois à 3 ans</td><td>Pneumocoque</td><td>Fièvre, pleurs incessants, otalgie, otorrhée, tympan rouge bombé ou perforé. Complication : mastoïdite</td><td>Oui</td></tr>
<tr><td>Bronchite aiguë (bas)</td><td>Nourrisson et grand enfant</td><td>VRS</td><td>Toux quinteuse ou grasse</td><td>Non</td></tr>
<tr><td>Bronchiolite (bas)</td><td>1 mois à 2 ans</td><td>VRS</td><td>Toux, respiration sifflante, fièvre, rhume</td><td>Non</td></tr>
<tr><td>Pneumonie (bas)</td><td>Après 5 ans</td><td>Pneumocoque (drépanocytose : terrain favorisant)</td><td>Toux, douleur thoracique, dyspnée, fièvre, perlèche labiale, syndrome de condensation. Bilan : radio du thorax, CRP, hémogramme</td><td>Oui</td></tr>
</table>
<p>Atteinte de la <b>zone de conduction</b> (rhinopharyngite, angine, otite, sinusite, laryngite) : encombrement, rôle de l'IDE : dégager les voies respiratoires. Atteinte de la <b>zone d'échange</b> (pneumonie, asthme, bronchite, bronchiolite) : perturbation des échanges gazeux.</p>

<h3>18. Convulsions de l'enfant</h3>
<ul>
<li><b>Crise convulsive :</b> contraction involontaire des muscles par hyperexcitabilité de neurones cérébraux. <b>État de mal convulsif :</b> crise de plus de 30 minutes ou crises subintrantes sans reprise de conscience. <b>Épilepsie :</b> récurrence de crises. Phases : tonique puis clonique.</li>
<li><b>Traitement :</b> diazépam (Valium) <b>0,5 mg/kg en intra-rectale</b>.</li>
</ul>

<h3>19. PCIMEN</h3>
<ul>
<li>Prise en charge intégrée des maladies de l'enfant et du nouveau-né : stratégie de l'OMS et de l'UNICEF (arbre décisionnel) pour réduire la mortalité et la gravité des maladies.</li>
<li><b>Maladies cibles :</b> malnutrition, pneumonie, diarrhée aiguë, rougeole, paludisme, infections néonatales, VIH/sida.</li>
<li><b>Directives :</b> évaluer l'enfant (signes de danger, symptômes principaux, état nutritionnel, état vaccinal), le classer (code couleur vert, jaune, rose), déterminer le traitement, traiter, conseiller la mère. Hospitalisation ou non, selon la classification.</li>
</ul>

<h3>20. Pièges à retenir</h3>
<table>
<tr><th>Affirmation fausse</th><th>Correction</th></tr>
<tr><td>FC normale du nouveau-né : 100 à 120/min</td><td>100 à 160/min</td></tr>
<tr><td>Poids du nouveau-né à terme : 2 500 à 3 500 g</td><td>2 500 à 4 000 g</td></tr>
<tr><td>Vitamine K1 préventive : 5 mg</td><td>1 mg en IM (0,5 mg si moins de 1 500 g)</td></tr>
<tr><td>Décider de la réanimation avec l'APGAR</td><td>La minute d'or</td></tr>
<tr><td>Gravité de la détresse respiratoire : APGAR</td><td>Score de Silverman</td></tr>
<tr><td>Infection tardive : <i>E. coli</i></td><td>Staphylocoque doré (précoce : streptocoque B)</td></tr>
<tr><td>Mastoïdite : complication de la bronchiolite</td><td>Complication de l'otite moyenne aiguë</td></tr>
<tr><td>Antibiotique dans la rhinopharyngite</td><td>Aucun avant 3 ans</td></tr>
<tr><td>Retard dentaire dès 12 mois</td><td>Aucune dent après 15 mois</td></tr>
<tr><td>Colostrum impropre à la consommation</td><td>Il protège le nouveau-né</td></tr>
<tr><td>Ocytocine produite par les acini</td><td>Posthypophyse, agit sur les cellules myoépithéliales</td></tr>
<tr><td>VIH : contre-indication absolue de l'allaitement</td><td>Poursuivre si la mère est sous trithérapie</td></tr>
<tr><td>Sein + eau = allaitement mixte</td><td>Prépondérant (mixte : sein + biberon)</td></tr>
<tr><td>F75 pour le prématuré malade</td><td>Lait thérapeutique de la malnutrition sévère</td></tr>
<tr><td>Âge du « pourquoi ? » : 4 ans</td><td>3 ans</td></tr>
</table>
` },

};
