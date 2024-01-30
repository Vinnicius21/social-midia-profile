import React from "react";
import styles from "./User.module.css";
import avatarImage from "./assets/images/avatar-jessica.jpeg";

export function User() {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <header className={styles.header}>
          <div className={styles.profile}>
            <img
              className={styles.avatar}
              src={avatarImage}
              alt="Avatar"
            />
            <h1>Jessica Randall</h1>
            <h3>London, United Kingdom</h3>
          </div>
        </header>
        <p>"Front-end developer and avid reader."</p>
        <footer className={styles.buttonContainer}>
          <button>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </button>
          <button>
            <a
              href="https://www.frontendmentor.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Mentor
            </a>
          </button>
          <button>
            <a
              href="https://br.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </button>

          <button>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </button>

          <button>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </button>
        </footer>

        <footer className={styles.attribution}>
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="https://github.com/Vinnicius21">Vinicius</a>.
          </div>
        </footer>
      </div>
    </div>
  );
}
