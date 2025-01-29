import React, { useState, useEffect } from "react";
import "../../css/Modal.css";

/**
 * Modal component that displays a modal overlay with GitHub profile information.
 *
 * @param {boolean} isOpen - A boolean that determines if the modal is open.
 * @param {function} onClose - A function to close the modal.
 *
 * The component fetches data from the GitHub API for a specific user ('github-johndoe')
 * when the modal is opened. It displays the user's avatar, username, bio, and GitHub stats
 * such as the number of repositories, followers, and following. If the data is not yet
 * available, a loading indicator is shown. The modal can be closed by clicking the close
 * button.
 */

const Modal = ({ isOpen, onClose }) => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/github-johndoe"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <strong>Mon profil GitHub</strong>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>

        {Data ? (
          <div className="modal-body">
            <div className="profile-image">
              <img
                src={Data.avatar_url || "/api/placeholder/200/200"}
                alt="Profile"
                className="avatar"
              />
            </div>

            <div className="profile-info">
              <div className="info-item">
                <span className="username">{Data.login || "John Doe"}</span>
              </div>

              <div className="info-item bio">
                <p>
                  {Data.bio ||
                    "As we all know, John Doe's identity is unknown. I just wanted to contribute without being known."}
                </p>
              </div>

              <div className="github-stats">
                <div className="stat-item">
                  <span className="stat-label">Repositories:</span>
                  <span className="stat-value">{Data.public_repos || 1}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Followers:</span>
                  <span className="stat-value">{Data.followers || 16}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Following:</span>
                  <span className="stat-value">{Data.following || 0}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="loading">Loading...</div>
        )}

        <div className="modal-footer">
          <button className="close-btn" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
