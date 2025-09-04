import { games } from "@/data/games";
import motCommunImg from "@/assets/motcommun.png";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import Footer from "@/components/Footer";
import dessineALaChaine from "@/assets/dessine a la chaine.png";
import faireRireSansRireVisuel from "@/assets/aperololo-faireriresansrire.png";
import aperololoLesEncheres from "@/assets/aperololo-lesencheres.jpg";
import aperololoPasDansLeRythme from "@/assets/aperololo-pasdanslerythme.jpg";
import aperololoMissionSecrete from "@/assets/aperololo-missionsecrete.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import catMascot from "@/assets/New mascot.png";
import aperololoMurduson from "@/assets/aperololo-murduson.png";
import jusqua10V3 from "@/assets/jusqua10 v3.png";
import suiteDeStarV3 from "@/assets/suite de star v3.png";
import aperololoDosados from "@/assets/aperololo-dosados.jpg";
import cauldronIcon from "@/assets/icon/cauldron-thks-icongeek26.png";
import cloakIcon from "@/assets/icon/cloak-thks-icongeek26.png";
import crystalsIcon from "@/assets/icon/crystals-thks-icongeek26.png";
import hatIcon from "@/assets/icon/hat-thks-icongeek26.png";
import homeIcon from "@/assets/icon/home-thks-icongeek26.png";
import mortarIcon from "@/assets/icon/mortar-thks-icongeek26.png";
import quillIcon from "@/assets/icon/quill-thks-icongeek26.png";
import scrollIcon from "@/assets/icon/scroll-thks-icongeek26.png";
import smokeIcon from "@/assets/icon/smoke-thks-icongeek26.png";
import wandIcon from "@/assets/icon/wand-thks-icongeek26.png";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const gameImageMapping: { [key: string]: string } = {
	'/src/assets/aperololo-murduson.png': aperololoMurduson,
	'/src/assets/jusqua10 v3.png': jusqua10V3,
	'/src/assets/suite de star v3.png': suiteDeStarV3,
	'/src/assets/aperololo-dosados.jpg': aperololoDosados,
	'/src/assets/aperololo-missionsecrete.jpg': aperololoMissionSecrete,
	'/src/assets/aperololo-faireriresansrire.png': faireRireSansRireVisuel,
	'/src/assets/aperololo-pasdanslerythme.jpg': aperololoPasDansLeRythme,
	'/src/assets/aperololo-lesencheres.jpg': aperololoLesEncheres,
	'/src/assets/dessine a la chaine.png': dessineALaChaine,
	'/src/assets/motcommun.png': motCommunImg,
};

const gameIconMapping: { [key: string]: string } = {
	'/src/assets/icon/smoke-thks-icongeek26.png': smokeIcon,
	'/src/assets/icon/scroll-thks-icongeek26.png': scrollIcon,
	'/src/assets/icon/wand-thks-icongeek26.png': wandIcon,
	'/src/assets/icon/cloak-thks-icongeek26.png': cloakIcon,
	'/src/assets/icon/cauldron-thks-icongeek26.png': cauldronIcon,
	'/src/assets/icon/crystals-thks-icongeek26.png': crystalsIcon,
	'/src/assets/icon/mortar-thks-icongeek26.png': mortarIcon,
	'/src/assets/icon/hat-thks-icongeek26.png': hatIcon,
	'/src/assets/icon/quill-thks-icongeek26.png': quillIcon,
	'/src/assets/icon/home-thks-icongeek26.png': homeIcon,
};

const GameExplanation = () => {
	const isMobile = useIsMobile();
	const [drawerOpen, setDrawerOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	// Get id param from URL
	const params = new URLSearchParams(location.search);
	const idParam = params.get("id");
	// Find index from idParam
	const initialIndex = idParam ? games.findIndex(g => g.id === idParam) : 0;
	const [selected, setSelected] = useState(initialIndex >= 0 ? initialIndex : 0);
	const game = games[selected];
	// TODO: Replace with real user premium status
	const isUserPremium = false;

	// Synchronise l'index sélectionné avec l'URL
	useEffect(() => {
		if (idParam) {
			const idx = games.findIndex(g => g.id === idParam);
			if (idx >= 0 && idx !== selected) {
				setSelected(idx);
			}
		}
	}, [idParam, selected]);

	const handleGameClick = (i: number) => {
		setSelected(i);
		navigate("/game-explanation?id=" + games[i].id);
	};

	const gameIcons = games.map(g => gameIconMapping[g.icon]);

       return (
	       <div className="min-h-screen bg-background flex flex-col">
		       {/* PaywallDialog supprimé */}
		       <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} py-10 px-0 flex-1`}>
			       {/* Sélecteur de jeux */}
			       {isMobile ? (
				       <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
					       <DrawerTrigger asChild>
						       <Button className="mx-4 mb-4" variant="outline" onClick={() => setDrawerOpen(true)}>
							       Menu
						       </Button>
					       </DrawerTrigger>
					       <DrawerContent>
						       <div className="px-6 py-6 flex flex-col gap-2">
							       <div className="mb-2 flex items-center gap-2 cursor-pointer hover:underline" onClick={() => window.location.href = '/'}>
								       <img src={catMascot} alt="Mascotte Aperololo" className="w-6 h-6 object-contain" />
								       <span className="text-base font-semibold text-party-purple">Accueil</span>
							       </div>
							       <h2 className="text-xl font-bold mb-1">Jeux</h2>
							       <div className="flex flex-col gap-2 mt-2">
								       {games.map((g, i) => (
									       <Button
										       key={g.titre}
										       variant="ghost"
										       className={`flex items-center w-full text-lg py-3 px-3 rounded-lg mb-0 border-2 shadow-sm transition
											       ${selected === i
													       ? "bg-party-purple border-party-purple"
													       : "bg-white border-party-purple/40 hover:border-party-purple hover:shadow-md"}
										       `}
										       onClick={() => {
											       setDrawerOpen(false);
											       handleGameClick(i);
										       }}
									       >
										       <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center mr-2">
											       <img src={gameIcons[i]} alt={`Icone jeu ${g.titre}`} className="w-7 h-7 object-contain" />
										       </span>
										       <span
											       className={`w-full text-left font-semibold block overflow-hidden text-ellipsis whitespace-nowrap
												       ${selected === i ? "text-party-yellow" : "text-party-purple"}
											       `}
											       title={g.titre}
										       >
											       {g.titre}
										       </span>
									       </Button>
								       ))}
							       </div>
						       </div>
					       </DrawerContent>
				       </Drawer>
			       ) : (
				       <aside className="w-80 bg-muted/50 px-8 py-8 flex flex-col gap-2 border-r">
					       <div className="mb-2 flex items-center gap-2 cursor-pointer hover:underline" onClick={() => window.location.href = '/'}>
						       <img src={catMascot} alt="Mascotte Aperololo" className="w-6 h-6 object-contain" />
						       <span className="text-base font-semibold text-party-purple">Accueil</span>
					       </div>
					       <h2 className="text-xl font-bold mb-1">Jeux</h2>
					       <div className="flex flex-col gap-2 mt-2">
						       {games.map((g, i) => (
							       <Button
								       key={g.titre}
								       variant="ghost"
								       className={`flex items-center w-full text-lg py-3 px-3 rounded-lg mb-0 border-2 shadow-sm transition
									       ${selected === i
											       ? "bg-party-purple border-party-purple"
											       : "bg-white border-party-purple/40 hover:border-party-purple hover:shadow-md"}
								       `}
								       onClick={() => {
									       handleGameClick(i);
								       }}
							       >
								       <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center mr-2">
									       <img src={gameIcons[i]} alt={`Icone jeu ${g.titre}`} className="w-7 h-7 object-contain" />
								       </span>
								       <span
									       className={`w-full text-left font-semibold block overflow-hidden text-ellipsis whitespace-nowrap
										       ${selected === i ? "text-party-yellow" : "text-party-purple"}
									       `}
									       title={g.titre}
								       >
									       {g.titre}
								       </span>
							       </Button>
						       ))}
					       </div>
				       </aside>
			       )}

			       {/* Droite : Détails du jeu */}
			       <main className={`flex-1 ${isMobile ? 'px-2 py-2' : 'px-12 py-10'}`}>
				       <div>
					       <div className="flex flex-col items-center mb-4 max-w-md mx-auto w-full">
						       {/* Image d'illustration du jeu au-dessus du titre */}
						       <img
							   src={gameImageMapping[game.coverImage]}
							   alt={`Illustration jeu ${game.titre}`}
							   className="mb-4 shadow-lg rounded-xl"
							   style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
						       />
						       <h1 className="text-3xl font-bold text-primary text-center">
							   {game.titre}
						       </h1>
					       </div>
					       <Card className="mb-8">
						       <CardContent>
							       <ul className="mb-2 flex flex-col gap-1 text-base font-sans mt-4">
								       <li>
									       <strong>Joueurs :</strong> {game.joueurs}
								       </li>
								       <li>
									       <strong>Mode de jeu :</strong> {game.modeDeJeu}
								       </li>
							       </ul>
							       <div className="mb-2 text-base font-sans">
								       <strong>Description :</strong> {game.shortDescription}
							       </div>
							       {/* Si jeu premium et utilisateur non premium, on affiche uniquement les éléments ci-dessus + story + bouton premium */}
				       {game.is_premium && !isUserPremium ? (
					       <>
						       {/* Affichage restreint pour jeux premium */}
						       <div className="mt-8 bg-party-pink/10 rounded-lg p-4 flex items-center gap-4 shadow-md border border-party-pink/40">
							       <img
								       src={catMascot}
								       alt="Mascotte Aperololo"
								       className="w-16 h-16 object-contain self-center"
							       />
							       <blockquote className="text-base text-party-purple italic flex-1 px-2">
								       <span className="block" dangerouslySetInnerHTML={{ __html: game.story }} />
							       </blockquote>
						       </div>
						       <div className="flex justify-center mt-8">
							       <Button
								       className="w-full max-w-md px-6 py-4 rounded-xl text-xl font-extrabold shadow-lg border-2 border-party-purple bg-gradient-to-r from-party-yellow via-party-pink to-party-purple text-white transition duration-200 hover:scale-105 hover:from-party-purple hover:to-party-yellow hover:text-party-purple text-center whitespace-normal break-words"
								       onClick={() => navigate('/to-go-premium')}
								       style={{
									       boxShadow: '0 4px 24px 0 rgba(162,89,255,0.15)',
									       letterSpacing: '0.03em',
									       wordBreak: 'break-word',
								       }}
							       >
								       🔒 Devenir premium
							       </Button>
						       </div>
					       </>
				       ) : (
					       <>
						       {/* Affichage complet pour jeux gratuits et premium débloqués */}
						       <div className="mb-2 text-base font-sans">
							       <strong>Règles :</strong>
							       <ol className="list-decimal ml-6 mt-2">
								       {game.rules.map((rule, idx) => {
									       if (game.titre === "Pas dans le rythme" && idx === 1) {
										       return <li key={idx} dangerouslySetInnerHTML={{ __html: rule }} />;
									       }
									       return <li key={idx}>{rule}</li>;
								       })}
							       </ol>
							       {/* Section Idées de chansons pour 'Pas dans le rythme' */}
							       {game.titre === "Pas dans le rythme" && (
								       <div className="mt-6">
									       <strong>Idées de chansons :</strong>
									       <div className="mt-2">
										       <iframe
											       data-testid="embed-iframe"
											       style={{ borderRadius: '12px' }}
											       src="https://open.spotify.com/embed/playlist/2yHhJNvzDaVi9rhjbHfZLx?utm_source=generator"
											       width="100%"
											       height="80"
											       frameBorder="0"
											       allowFullScreen
											       allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
											       loading="lazy"
										       ></iframe>
									       </div>
								       </div>
							       )}
							       {/* Section Options de jeu pour 'Dessine à la chaîne' */}
							       {game.titre === "Dessine à la chaîne" && game.materiel && game.optionsDeJeu && (
								       <>
									       <div className="mt-6 text-base font-sans">
										       <strong>Matériel :</strong>
										       <ul className="list-disc ml-6 mt-2">
											       {(game.materiel as string[]).map((m, idx) => <li key={idx}>{m}</li>)}
										       </ul>
									       </div>
									       <div className="mt-6 text-base font-sans">
										       <strong>Options de jeu :</strong>
										       <ul className="list-disc ml-6 mt-2">
											       {(game.optionsDeJeu as string[]).map((o, idx) => <li key={idx}>{o}</li>)}
										       </ul>
									       </div>
								       </>
							       )}
							       {/* Section Idées d'enchères pour 'Les enchères' */}
							       {game.titre === "Les enchères" && game.idees && (
								       <div className="mt-6 text-base font-sans">
									       <strong>Idées d'enchères :</strong>
									       <ul className="list-disc ml-6 mt-2">
										       {(game.idees as string[]).map((idee, idx) => <li key={idx} dangerouslySetInnerHTML={{ __html: idee }}></li>)}
									       </ul>
								       </div>
							       )}
						       </div>
						       {game.titre === "Le mur du son" && game.conseil && game.nuages ? (
							       <>
								       <div className="text-base font-sans">
									       <strong>Conseil :</strong>
									       <ul className="list-disc ml-6 mt-2">
										       {game.conseil.map((c, idx) => (
											       <li key={idx}>{c}</li>
										       ))}
									       </ul>
								       </div>
								       <div className="mt-4 text-base font-sans">
									       <strong>Accès aux nuages de mots :</strong>
									       <ul className="list-disc ml-6 mt-2">
										       {game.nuages.map((nuage, idx) => (
											       <li key={idx}>
												       <a href={nuage.url} target="_blank" rel="noopener noreferrer" className="text-party-blue underline hover:text-party-green">
													       {nuage.theme}
												       </a>
											       </li>
										       ))}
									       </ul>
								       </div>
							       </>
						       ) : game.titre === "Dos à dos" && game.examples ? (
							       <div className="text-base font-sans">
								       <strong>Idées de questions :</strong>
								       <ul className="list-disc ml-6 mt-2">
									       {game.examples.map((ex, idx) => (
										       <li key={idx}>{ex}</li>
									       ))}
								       </ul>
							       </div>
						       ) : game.titre === "Suite de stars" && game.examples ? (
							       !game.hideExamples && (
								       <div className="text-base font-sans">
									       <strong>Exemples :</strong>
									       <ul className="list-disc ml-6 mt-2">
										       {game.examples.map((ex, idx) => (
											       <li key={idx}>{ex}</li>
										       ))}
									       </ul>
								       </div>
							       )
						       ) : game.titre === "Jusqu'à 10" && game.contraintes ? (
							       <div className="text-base font-sans">
								       <strong>Idées de contraintes :</strong>
								       <ul className="list-disc ml-6 mt-2">
									       {game.contraintes.map((contrainte, idx) => (
										       <li key={idx}>{contrainte}</li>
									       ))}
								       </ul>
							       </div>
						       ) : game.titre === "Le mot commun" && game.examples ? (
							       <div className="text-base font-sans">
								       <strong>Exemples :</strong>
								       {game.examples.map((ex, idx) => (
									       <div key={idx} className="mb-1">
										       <ul className="list-disc ml-6 mt-2">
											       <li>{ex}</li>
										       </ul>
										       <div className="ml-6 mt-1 text-sm text-muted-foreground">
											       {/* Ligne d'explication personnalisée pour chaque exemple */}
											       {idx === 0 && "Objets qui fonctionnent : une carte d'un roi, une lumière pour illustrer Versailles, une couronne etc."}
											       {idx === 1 && "Objets qui fonctionnent : une urne, une tête de mort, une pierre, etc."}
											       {idx === 2 && "Objets qui fonctionnent : des lunettes, une loupe, une peluche de taupe, etc."}
											       {idx === 3 && "Objets qui fonctionnent : un oeuf, tout objet rond,  etc."}
										       </div>
									       </div>
								       ))}
							       </div>
						       ) : game.showTours && game.tours && game.tours.length > 0 ? (
								<div className="text-base font-sans mt-6">
									<strong>Tours :</strong>
									<ul className="list-disc ml-6 mt-2">
										{game.tours.map((tour, idx) => (
											<li key={idx}>
												<div>
													<span className="font-semibold" style={{ color: tour.color }}>{tour.title} :</span>
													{tour.description.map((desc, descIdx) => (
														<div key={descIdx} dangerouslySetInnerHTML={{ __html: desc }} />
													))}
												</div>
											</li>
										))}
									</ul>
								</div>
						       ) : (
							       <div className="text-base font-sans"></div>
						       )}
						       <div className="mt-8 bg-party-pink/10 rounded-lg p-4 flex items-center gap-4 shadow-md border border-party-pink/40">
							       <img
								       src={catMascot}
								       alt="Mascotte Aperololo"
								       className="w-16 h-16 object-contain self-center"
							       />
							       <blockquote className="text-base text-party-purple italic flex-1 px-2">
								       <span className="block" dangerouslySetInnerHTML={{ __html: game.story }} />
							       </blockquote>
						       </div>
					       </>
				       )}
						       </CardContent>
					       </Card>
				       </div>
			       </main>
		       </div>
		       <Footer />
	       </div>
       );
};

export default GameExplanation;
