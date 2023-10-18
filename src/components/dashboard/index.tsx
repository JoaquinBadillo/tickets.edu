// MUI
import { Box, Card, Typography, CardContent, CardHeader, CardMedia, Container, CssBaseline, Grid, Theme, useMediaQuery } from "@mui/material"
// MUI icons
import FolderIcon from '@mui/icons-material/Folder';
import LabelIcon from '@mui/icons-material/Label';
import TaskIcon from '@mui/icons-material/Task';
import SaveIcon from '@mui/icons-material/Save'; //import CloudIcon from '@mui/icons-material/Cloud';
import { usePermissions } from "react-admin";

export const Dashboard = () => {
    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
    const thicc = isSmall ? "100%" : "45%";
    const { permissions } = usePermissions();

    return (
        <Container component={"main"} maxWidth={isSmall ? "xs" : undefined}>
        <Card>
            <CssBaseline/>
            <Typography variant="h3" sx={{margin: 2, fontWeight: "bold"}}>
            Bienvenidos a Tickets.edu
            </Typography>
            <CardContent sx={{fontSize: "16pt"}}>
            Un sistema diseñado para promover la productividad. 
            Hemos visto que algo tan sencillo como un ticket 
            puede facilitar la organización cualquier proyecto.
            </CardContent>

            <Container maxWidth="md">
                <Grid container spacing={4}>
                    <Grid item sx={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                        <Card sx={{margin: 2, width: thicc}}>
                            <Box sx={{padding: 1.5, backgroundColor: "#fb8264", borderRadius: 2}}>
                                <FolderIcon 
                                    sx={{
                                        height: 30, 
                                        width: "auto",
                                        marginRight: 3
                                    }}
                                />
                                <Typography variant="h5" sx={{display: "inline", marginBottom: "5"}}>
                                    Gestión de Proyectos
                                </Typography>
                            </Box>
                            <CardContent sx={{fontSize: "16pt"}}>
                                Con nuestros reportes semanales, sabrás exactamente lo que 
                                esté causando problemas y cómo progresan las soluciones a 
                                dichos problemas.
                            </CardContent>
                        </Card>
                        <Card sx={{margin: 2, width: thicc}}>
                            <Box sx={{padding: 1.5, backgroundColor: "#65a8ff", borderRadius: 2}}>
                                <TaskIcon 
                                    sx={{
                                        height: 30, 
                                        width: "auto",
                                        marginRight: 3
                                    }}
                                />
                                <Typography variant="h5" sx={{display: "inline", marginBottom: "5"}}>
                                    Progreso de Tareas
                                </Typography>
                            </Box>
                            <CardContent sx={{fontSize: "16pt"}}>
                                Gracias al uso de tickets, somos capaces de guardar el 
                                progreso que lleva cada problema.
                            </CardContent>
                        </Card>
                        <Card sx={{margin: 2, width: thicc}}>
                            <Box sx={{padding: 1.5, backgroundColor: "#49b588", borderRadius: 2}}>
                                <SaveIcon 
                                    sx={{
                                        height: 30, 
                                        width: "auto",
                                        marginRight: 3
                                    }}
                                />
                                <Typography variant="h5" sx={{display: "inline", marginBottom: "5"}}>
                                    Tickets Permanentes
                                </Typography>
                            </Box>
                            <CardContent sx={{fontSize: "16pt"}}>
                                Todo ticket se guarda en base de datos, incluso los 
                                terminados. Esto facilita hacer cuentas de a dónde 
                                se va el presupuesto.
                            </CardContent>
                        </Card>
                        <Card sx={{margin: 2, width: thicc}}>
                            <Box sx={{padding: 1.5, backgroundColor: "#f99cdb", borderRadius: 2}}>
                                <LabelIcon 
                                    sx={{
                                        height: 30, 
                                        width: "auto",
                                        marginRight: 3
                                    }}
                                />
                                <Typography variant="h5" sx={{display: "inline", marginBottom: "5"}}>
                                    Etiquetas
                                </Typography>
                            </Box>
                            <CardContent sx={{fontSize: "16pt"}}>
                                Para facilitar el orden tenemos categorías y 
                                subcategorías para una gran variedad de problemas 
                                que puedan surgir.
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Typography variant="h3" sx={{margin: 2, fontWeight: "bold"}}>
                Primeros Pasos
            </Typography>
                <Container>
                    <Typography variant="h4" sx={{margin: 2, fontWeight: "bold"}}>
                        Cambio de Contraseña
                    </Typography>
                    <Card>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/passChange.gif"
                            alt="Boton de Cambiar Contraseña."
                        />}
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/tutorials/tutorialPassChange.gif"
                            alt="Tutorial en video para cambiar de contraseña."
                        />}
                        <CardContent sx={{fontSize: "16pt"}}>
                            Este botón te manda a la interfaz de cambio
                            de contraseña en donde se debe poner una
                            nueva y verificarla para asegurar que el 
                            usuario la recuerde.
                            
                            Al darle click al botón de cambiar contraseña, 
                            te va a redirigir a la interfaz para realizar
                            el cambio, donde se tendrán que llenar los 
                            campos de "Contraseña" y "Verificar Contraseña".
                            Una vez llenados, debes darle click al botón: 
                            "Cambiar Contraseña".
                        </CardContent>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/changePass.gif"
                            alt="Boton de Cambiar Contraseña."
                        />}
                    </Card>
                    <Typography variant="h4" sx={{margin: 2, fontWeight: "bold"}}>
                        Tickets
                    </Typography>
                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Crear un Ticket
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/crear.gif"
                            alt="Boton de creación de tickets."
                        /> }
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/tutorials/tutorialCrear.gif"
                            alt="Tutorial en video de creación de un ticket."
                        /> }
                        <CardContent sx={{fontSize: "16pt"}}>
                            El botón crear te lleva a un formulario 
                            que permite crear un nuevo ticket. 
                            Dentro de éste, se debe llenar:
                            <ul>
                                <li>Título</li>
                                <li>Prioridad</li>
                                <ul>
                                    <li>Alta</li>
                                    <li>Media</li>
                                    <li>Baja</li>
                                </ul>
                                <li>Clasificación</li>
                                    <ul>
                                        <li>Servicios</li>
                                        <li>Digital</li>
                                        <li>Infraestructura</li>
                                        <li>Recursos Humanos</li>
                                        <li>Beneficiarios</li>
                                        <li>Mobiliario</li>
                                        <li>Seguridad</li>
                                        <li>Materiales</li>
                                        <li>Fenómenos Meteorológicos</li>
                                    </ul>
                                <li>Incidente (subcategorías de cada clasificación)</li>
                                <li>Ubicación</li>
                                <li>Descripción del problema</li>
                                <li>Número de folio (si el problema lo atiende el gobierno)</li>
                            </ul>
                            Llenar estos campos cambia dependiendo del campo que 
                            se esté llenando. Para el título, el número de folio 
                            y la descripción se escribe en un cuadro de texto 
                            mientras que en la prioridad, clasificación, 
                            incidente y ubicación; se elige una opción de las que 
                            aparezcan en la lista que se despliegue. 

                        </CardContent>
                    </Card>

                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Editar un Ticket
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/editar.gif"
                            alt="Boton de edición de tickets."
                        /> }
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/tutorials/tutorialEditar.gif"
                            alt="Tutorial en video de edición de un ticket."
                        /> }
                        <CardContent sx={{fontSize: "16pt"}}>
                            El botón editar te lleva a un formulario 
                            que permite editar un ticket existente. 
                            Dentro de éste, se puede llenar:
                            <ul>
                                <li>Título</li>
                                <li>Número de Folio</li>
                                <li>Descripción del problema</li>
                            </ul>
                            En caso de haberse equivocado al llenar 
                            un ticket, uno puede cambiarle el título 
                            o la descripción. Se puede también agregar 
                            un número de folio si éste fue olvidado o 
                            cambiado sobre la marcha. Una vez terminado, 
                            se da clic en guardar y listo!
                        </CardContent>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/guardar.gif"
                            alt="Botón de guardar."
                        /> }
                    </Card>

                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Orden Ascendente
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/ascending.gif"
                            alt="Botón de ordenamiento ascendente."
                        /> }
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/tutorials/tutorialAsc.gif"
                            alt="Tutorial en video de acomodar tickets en orden ascendiente."
                        /> }
                        <CardContent sx={{fontSize: "16pt"}}>
                            Permite organizar los tickets en base de datos 
                            para que estén en orden ascendiente.

                            Al darle click a los 3 puntos al lado de cualquier 
                            columna, se despliega una lista conteniendo 
                            todas las funcionalidades exta que ofrece nuestro 
                            sistema. Entre ellas, eligiendo la que dice "Orden 
                            ASC", aparecerá al lado del nombre de la columna 
                            una flecha apuntando hacia arriba indicando que el 
                            orden es ascendiente.
                        </CardContent>
                    </Card>

                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Orden Descendente
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/descending.gif"
                            alt="Botón de ordenamiento descendente."
                        /> }
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/tutorials/tutorialDesc.gif"
                            alt="Tutorial en video de acomodar tickets en orden descendente."
                        /> }
                        <CardContent sx={{fontSize: "16pt"}}>
                        Permite organizar los tickets en base de datos 
                            para que estén en orden ascendiente.

                            Al darle click a los 3 puntos al lado de cualquier 
                            columna, se despliega una lista conteniendo 
                            todas las funcionalidades exta que ofrece nuestro 
                            sistema. Entre ellas, eligiendo la que dice "Orden 
                            DESC", aparecerá al lado del nombre de la columna 
                            una flecha apuntando hacia abajo indicando que el 
                            orden es descendiente.
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Filtrar
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/filtrar.gif"
                            alt="Boton de filtrado de tickets."
                        /> }
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/tutorials/tutorialFiltro.gif"
                            alt="Tutorial en video de filtrar tickets."
                        /> }
                        <CardContent sx={{fontSize: "16pt"}}>
                            Permite filtrar una columna por valor deseado, por 
                            ejemplo, si se quieren ver los tickets del 18 de 
                            octubre, esta herramienta lo hace.

                            Al darle click a los 3 puntos al lado de cualquier 
                            columna, se despliega una lista conteniendo 
                            todas las funcionalidades exta que ofrece nuestro 
                            sistema. Entre ellas, eligiendo la que dice "Filter", 
                            se desplegará una interfaz en donde se podrá elegir 
                            una columna especifica, un operador lógico y el valor 
                            deseado. Los operadores lógicos disponibles en una 
                            lista desplegada son:
                            <ul>
                                <li>Contiene: muestra todos los tickets que contengan un valor determinado.</li>
                                <li>Es igual: muestra todos los tickets que sean iguales a un valor determinado.</li>
                                <li>Comienza con: muestra todos los tickets que empiecen con un valor determinado.</li>
                                <li>Termina con: muestra todos los tickets que terminen en un valor.</li>
                                <li>Esta vacio: muestra todos los tickets que carecen de un valor.</li>
                                <li>No esta vacio: muestra todos los tickets que carecen de un valor.</li>
                                <li>Es cualquiera de: </li>
                            </ul>
                            nota: un buen uso de los operadores "Esta vacio" 
                            o "No esta vacio" puede ser revisar que tengan o 
                            no folio.
                        </CardContent>
                    </Card>

                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Ocultar Columna
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/esconder.gif"
                            alt="Boton de ocultar columna."
                        /> }
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/tutorials/tutorialOculto.gif"
                            alt="Tutorial en video de ocultar una columna."
                        />} 
                        <CardContent sx={{fontSize: "16pt"}}>
                            Permite modificar las columnas que aparecen y por 
                            ende los datos, por ejemplo, se puede eliminar 
                            folio porque se desea una mejor visualización.

                            Al darle click a los 3 puntos al lado de cualquier 
                            columna, se despliega una lista conteniendo 
                            todas las funcionalidades exta que ofrece nuestro 
                            sistema. Entre ellas, eligiendo la que dice 
                            "Ocultar", se ocultará la columna.
                        </CardContent>
                    </Card>

                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Administrar Columnas
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/zoomin/seleccionar.gif"
                            alt="Boton de selección de columnas."
                        />}
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/tickets/tutorials/tutorialSelect.gif"
                            alt="Tutorial en video de edición de columnas mostradas."
                        />}
                        <CardContent sx={{fontSize: "16pt"}}>
                            Permite modificar las columnas que aparecen y por 
                            ende los datos, por ejemplo, se puede eliminar 
                            Última Actualización y Id para mejor 
                            visualización o después de ocultar una columna se 
                            desea volver a verla.

                            Al darle click a los 3 puntos al lado de cualquier 
                            columna, se despliega una lista conteniendo 
                            todas las funcionalidades exta que ofrece nuestro 
                            sistema. Entre ellas, eligiendo la que dice "Administrar 
                            Columnas", se desplegará una lista con todas las 
                            columnas y la opcion de apagar o prender cada una.
                        </CardContent>
                    </Card>
                </Container>
                { permissions === "admin" && <Container>
                    <Typography variant="h4" sx={{margin: 2, fontWeight: "bold"}}>
                        Usuarios
                    </Typography>
                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Crear un Usuario
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/users/zoomin/crear.gif"
                            alt="Boton de creación de usuarios."
                        />}
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/users/tutorials/tutorialCrear.gif"
                            alt="Tutorial en video de creación de usuarios."
                        />}
                        <CardContent sx={{fontSize: "16pt"}}>
                            Este botón te manda a la interfaz de creación de 
                            ticket, en donde se debe llenar:
                            <ul>
                                <li>Nombre</li>
                                <li>Correo Electrónico</li>
                                <li>Rol</li>
                                <ul>
                                    <li>Administrador: puede levantar y manipular todos los tickets, tiene un reporte semanal y puede crear y editar usuarios.</li>
                                    <li>Usuario: solo puede levantar y manipular sus propios tickets.</li>
                                </ul>
                            </ul> 
                            Al darle click al botón de crear, te va a redirigir 
                            a la interfaz de creación en donde se llena en cuadros 
                            de texto tanto el nombre como el correo electrónico de
                            tu nuevo usuario, después elegirás entre las 2 opciones
                            de rol, estas opciones aparecen en una lista desplegada.
                            Cuando se de click a guardar, se arrojará una contraseña 
                            generada aleatoriamente que será la contraseña del usuario.
                        </CardContent>
                    </Card>
                    <Card>
                        <Typography variant="h4" sx={{margin: 2, fontWeight: "medium"}}>
                            Editar Usuarios
                        </Typography>
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/users/zoomin/editar.gif"
                            alt="Boton de edición de usuarios."
                        />}
                        { !isSmall && <CardMedia
                            component="img"
                            sx={{ margin: 2, width: 800, borderRadius: 10 }}
                            image="./src/assets/users/tutorials/tutorialEditar.gif"
                            alt="Tutorial en video de edición de usuarios."
                        />}
                        <CardContent sx={{fontSize: "16pt"}}>
                            Este botón te manda a la interfaz de creación de 
                            ticket, en donde se debe llenar:
                            <ul>
                                <li>Nombre</li>
                                <li>Correo Electrónico</li>
                                <li>Rol</li>
                                <ul>
                                    <li>Administrador: puede levantar y manipular todos los tickets, tiene un reporte semanal y puede crear y editar usuarios.</li>
                                    <li>Usuario: solo puede levantar y manipular sus propios tickets.</li>
                                </ul>
                            </ul> 
                            Al darle click al botón de crear, te va a redirigir 
                            a la interfaz de creación en donde se llena en cuadros 
                            de texto tanto el nombre como el correo electrónico de
                            tu nuevo usuario, después elegirás entre las 2 opciones
                            de rol, estas opciones aparecen en una lista desplegada.
                            Cuando se de click a guardar, se arrojará una contraseña 
                            generada aleatoriamente que será la contraseña del usuario.
                        </CardContent>
                    </Card>
                </Container>}
        </Card>
        </Container>
    )};