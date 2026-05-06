/* Data Section */
.data-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
}

.data-card {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    background: var(--bg-main);
    border-radius: 8px;
    box-shadow: var(--shadow-sm);
    text-decoration: none;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.data-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.data-icon {
    font-size: 2.5rem;
    margin-right: 1.5rem;
    color: var(--primary-color);
}

.data-info h4 {
    color: var(--primary-color);
    margin-bottom: 0.3rem;
    font-size: 1.1rem;
}

.data-info p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin: 0;
}

.data-card-img {
    flex-direction: column;
    padding: 0;
    overflow: hidden;
}

.data-card-img img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-bottom: 1px solid var(--border-color);
}

.data-card-img .data-info {
    padding: 1.5rem;
    width: 100%;
    text-align: center;
}

.data-card-img .data-info h4 {
    margin-bottom: 0.5rem;
}

.data-card-img .data-icon {
    display: none;
}


