import { TranslationMessages } from "ra-core";
import polyglotI18nProvider from "ra-i18n-polyglot";

//@ts-nocheck
const spanishMessages: TranslationMessages = {
  ra: {
    action: {
      add: "Añadir",
      add_filter: "Añadir filtro",
      back: "Regresar",
      bulk_actions:
        "1 item seleccionado |||| %{smart_count} items seleccionados",
      cancel: "Cancelar",
      clear_input_value: "Vaciar",
      clone: "Clonar",
      close: "Cerrar",
      close_menu: "Cerrar menú",
      confirm: "Confirmar",
      create: "Crear",
      delete: "Eliminar",
      edit: "Editar",
      expand: "Expandir",
      export: "Exportar",
      list: "Listar",
      open_menu: "Abrir menú",
      refresh: "Refrescar",
      remove: "Borrar",
      remove_filter: "Borrar filtro",
      save: "Guardar",
      search: "Buscar",
      show: "Mostrar",
      sort: "Ordenar",
      undo: "Deshacer",
      unselect: "Deseleccionar",
      clear_array_input: "Vaciar",
      create_item: "Crear %{item}",
      remove_all_filters: "Eliminar filtros",
      select_all: "Seleccionar todo",
      select_row: "Seleccionar registro",
      update: "Actualizar",
      move_up: "Arriba",
      move_down: "Abajo",
      open: "Abrir",
      toggle_theme: "Cambiar tema",
      select_columns: "Seleccionar columnas",
    },
    auth: {
      auth_check_error: "Por favor inicie sesión para continuar",
      invalid_email_or_password: "Credenciales inválidas",
      logout: "Cerrar Sesión",
      password: "Contraseña",
      sign_in: "Iniciar Sesión",
      sign_in_error: "La autenticación falló",
      user_menu: "Perfil",
      username: "Usuario",
    },
    boolean: {
      true: "Sí",
      false: "No",
      null: "Nulo",
    },
    input: {
      file: {
        upload_several:
          "Arrastre algunos archivos para subir o haga clic para seleccionarlos.",
        upload_single:
          "Arrastre un archivo para subir o haga clic para seleccionarlo.",
      },
      image: {
        upload_several:
          "Arrastre algunas imagénes para subir o haga clic para seleccionarlas.",
        upload_single:
          "Arrastre alguna imagen para subir o haga clic para seleccionarla.",
      },
      references: {
        all_missing: "No se encontraron datos de referencias.",
        many_missing:
          "Al menos una de las referencias asociadas parece no estar disponible.",
        single_missing: "La referencia asociada no parece estar disponible.",
      },
      password: {
        toggle_visible: "Mostrar contraseña",
        toggle_hidden: "Ocultar contraseña",
      },
    },
    message: {
      about: "Acerca de",
      invalid_email_or_password: "Credenciales inválidas",
      are_you_sure: "¿Está seguro?",
      bulk_delete_content:
        "¿Seguro que quiere eliminar este %{name}? |||| ¿Seguro que quiere eliminar estos %{smart_count} items?",
      bulk_delete_title:
        "Eliminar %{name} |||| Eliminar %{smart_count} %{name} items",
      delete_content: "¿Seguro que quiere eliminar este item?",
      delete_title: "Eliminar %{name} #%{id}",
      details: "Detalles",
      error: "Se produjo un error y su solicitud no se pudo completar",
      invalid_form:
        "El formulario no es válido. Por favor verifique si hay errores",
      loading: "La página se está cargando, espere un momento por favor",
      no: "No",
      not_found: "Recurso no encontrado",
      yes: "Sí",
      unsaved_changes:
        "Sus cambios no han sido guardados. ¿Está seguro que quiere ignorarlos?",
      auth_error: "Error de autenticación",
      bulk_update_content:
        "Actualizar masivamente este %{name}? |||| Actualizar masivamente estos %{smart_count} items?",
      bulk_update_title: "Actualizar masivamente",
      clear_array_input: "Vaciar",
    },
    navigation: {
      next: "Siguiente",
      no_more_results:
        "El número de página %{page} está fuera de los límites. Pruebe la página anterior.",
      no_results: "No se han encontrado resultados",
      page_out_from_begin: "No puede ir antes de la página 1",
      page_out_from_end: "No puede ir después de la última página",
      page_out_of_boundaries: "Número de página %{page} fuera de los límites",
      page_range_info: "%{offsetBegin} - %{offsetEnd} de %{total}",
      page_rows_per_page: "Filas por página:",
      prev: "Anterior",
      skip_nav: "Saltar al contenido",
      partial_page_range_info: "%{offsetBegin} - %{offsetEnd} de %{total}",
      current_page: "Página actual %{page}",
      page: "Página",
      first: "Primero",
      last: "Último",
      previous: "Anterior",
    },
    sort: {
      sort_by: "Ordenar por %{field} %{order}",
      ASC: "ascendente",
      DESC: "descendente",
    },
    notification: {
      invalid_email_or_password: "Credenciales inválidas",
      bad_item: "Elemento incorrecto",
      canceled: "Acción cancelada",
      created: "Elemento creado",
      data_provider_error:
        "Error del proveedor de datos. Consulte la consola para más detalles.",
      deleted: "Elemento borrado |||| %{smart_count} elementos borrados.",
      http_error: "Error de comunicación con el servidor",
      item_doesnt_exist: "El elemento no existe",
      logged_out: "Su sesión ha finalizado, vuelva a conectarse.",
      updated:
        "Elemento actualizado |||| %{smart_count} elementos actualizados",
      i18n_error:
        "No se pudieron cargar las traducciones para el idioma especificado",
      not_authorized: "No autorizado",
      not_found: "Recurso no disponible",
      "": "Recuro no encontrado"
    },
    page: {
      create: "Crear %{name}",
      dashboard: "Tablero",
      edit: "%{name} #%{id}",
      empty: "No tiene ningún %{name} todavía.",
      error: "Algo salió mal",
      invite: "¿Quiere agregar entradas?",
      list: "Lista de %{name}",
      loading: "Cargando",
      not_found: "No encontrado",
      show: "%{name} #%{id}",
    },
    validation: {
      email: "Debe ser un correo electrónico válido",
      maxLength: "Debe contener %{max} caracteres o menos",
      maxValue: "Debe ser %{max} o menos",
      minLength: "Debe contener %{min} caracteres al menos",
      minValue: "Debe ser al menos %{min}",
      number: "Debe ser un número",
      oneOf: "Debe ser uno de: %{options}",
      regex: "Debe coincidir con un formato específico (regexp): %{pattern}",
      required: "Requerido",
      not_found: "Recurso no encontrado"
    },
    saved_queries: {
      label: "Consultas guardadas",
      query_name: "Nombre de la consulta",
      new_label: "Nueva consulta",
      new_dialog_title: "Guardar consulta",
      remove_label: "Eliminar consulta",
      remove_dialog_title: "Eliminar consulta",
      remove_label_with_name: "Eliminar consulta %{name}",
      remove_message: "Eliminar consulta %{name}?",
      help: "¿Necesita ayuda?",
    },
    configurable: {
      customize: "Personalizar",
      configureMode: "Modo de configuración",
      inspector: {
          title: "Título",
          content: "Contenido",
          reset: "Reiniciar",
          hideAll: "Ocultar todo",
          showAll: "Mostrar todo",
      },
      Datagrid: {
          title: "Título",
          unlabeled: "Sin Etiqueta",
      },
      SimpleForm: {
          title: "Título",
          unlabeled: "Sin etiqueta",
      },
      SimpleList: {
          title: "Título",
          primaryText: "Texto Primario",
          secondaryText: "Texto Secundario",
          tertiaryText: "Texto Terciario",
      },
    },
  }
};

const i18nProvider = polyglotI18nProvider(() => spanishMessages); // Default locale

export default i18nProvider;
