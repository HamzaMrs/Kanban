import React from "react";

export default function DeleteModal({ type, title, onDeleteBtnClick }) {
  return (
    <div className="modal-container dimmed">
      <div className="delete-modal">
        <h3 className="heading-L">Supprimer un(e) {type === 'task' ? 'tâche' : 'tableau'} ?</h3>
        {type === "task" ? (
          <p className="text-L">
            Êtes-vous sûr de vouloir supprimer la tâche "{title}" et ses sous-tâches ?
            Cette action est irréversible.
          </p>
        ) : (
          <p className="text-L">
            Êtes-vous sûr de vouloir supprimer le tableau "{title}" ? Cette action
            supprimera toutes les colonnes et tâches et est irréversible.
          </p>
        )}

        <div className="delete-modal-btns">
          <button onClick={onDeleteBtnClick} className="btn delete-btn">
            Supprimer
          </button>
          <button onClick={onDeleteBtnClick} className="btn cancel-btn">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
}
