'use client';

export function MobileStyles() {
  return (
    <style jsx global>{`
      @media (max-width: 768px) {
        .navbar-logo {
          display: none !important;
        }
      }
      
      /* Expertise Cards Styling */
      .expertise-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        width: 100%;
      }
      
      /* Ensure showcase grid always has 3 columns */
      .showcase-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        width: 100%;
      }
      
      .expertise-card {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background: white;
        height: 100%;
      }
      
      .expertise-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
      }
      
      .expertise-image-container {
        width: 100%;
        height: 200px;
        position: relative;
        overflow: hidden;
      }
      
      .expertise-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform 0.5s ease;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
      }
      
      .expertise-card:hover .expertise-image {
        transform: scale(1.05);
      }
      
      .expertise-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;
      }
      
      /* Fix text color to ensure legibility */
      .expertise-card h3,
      .expertise-card p,
      .expertise-card .expertise-description,
      .expertise-list-item {
        color: #333 !important;
      }
      
      .expertise-description {
        margin-bottom: 1rem;
      }
      
      .expertise-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .expertise-list-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .expertise-list-item:before {
        content: "•";
        color: #0070f3;
        font-weight: bold;
      }
      
      /* Testimonial Card Styling */
      .testimonial-card {
        background-color: #f8f9fa;
        border-left: 4px solid #0070f3;
      }
      
      .testimonial-card .expertise-content {
        padding: 2rem;
      }
      
      .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
        background-color: white;
      }
      
      .testimonial-card p,
      .testimonial-card h3,
      .testimonial-card span,
      .testimonial-card div {
        color: #000 !important;
      }
      
      /* Team Members Styling */
      .team-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        width: 100%;
      }
      
      .team-card {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background: white;
        height: 100%;
      }
      
      .team-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
      }
      
      .team-image-container {
        width: 100%;
        height: 250px;
        position: relative;
        overflow: hidden;
      }
      
      .team-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform 0.5s ease;
      }
      
      .team-card:hover .team-image {
        transform: scale(1.05);
      }
      
      .team-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        flex: 1;
        text-align: center;
      }
      
      /* Make team member names black */
      .team-content h3 {
        color: #000 !important;
      }
      
      /* Resource Augmentation Styling */
      .filter-buttons {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-bottom: 2rem;
        justify-content: center;
      }
      
      .filter-button {
        padding: 0.5rem 1.25rem;
        border-radius: 50px;
        background-color: #f0f0f0;
        color: #333;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        border: none;
        font-size: 0.9rem;
      }
      
      .filter-button:hover {
        background-color: #e0e0e0;
      }
      
      .filter-button.active {
        background-color: #0070f3;
        color: white;
      }
      
      .resource-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
        width: 100%;
      }
      
      .resource-card {
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        background: white;
        height: 100%;
      }
      
      .resource-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
      }
      
      .resource-image-container {
        width: 100%;
        height: 220px;
        position: relative;
        overflow: hidden;
      }
      
      .resource-image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        transition: transform 0.5s ease;
      }
      
      .resource-card:hover .resource-image {
        transform: scale(1.05);
      }
      
      .resource-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        flex: 1;
      }
      
      /* Make resource engineer names black */
      .resource-content h3 {
        color: #000 !important;
      }
      
      .resource-expertise {
        display: inline-block;
        padding: 0.25rem 0.75rem;
        background-color: #e6f7ff;
        color: #0070f3;
        border-radius: 50px;
        font-size: 0.85rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
      }
      
      .resource-skills {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }
      
      .resource-skill {
        padding: 0.2rem 0.6rem;
        background-color: #f0f0f0;
        border-radius: 4px;
        font-size: 0.8rem;
        color: #555;
      }
      
      .resource-experience {
        margin-top: auto;
        font-size: 0.9rem;
        color: #666;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      
      .resource-experience:before {
        content: "•";
        color: #0070f3;
        font-weight: bold;
      }
      
      @media (max-width: 1200px) {
        .expertise-grid,
        .team-grid,
        .resource-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .showcase-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      
      @media (max-width: 768px) {
        .expertise-grid,
        .team-grid,
        .resource-grid,
        .showcase-grid {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        
        .expertise-image-container,
        .team-image-container,
        .resource-image-container {
          height: 180px;
        }
        
        .expertise-content,
        .team-content,
        .resource-content {
          padding: 1.25rem;
        }
        
        .filter-buttons {
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-bottom: 1rem;
          justify-content: flex-start;
          -webkit-overflow-scrolling: touch;
        }
        
        .filter-button {
          flex: 0 0 auto;
          white-space: nowrap;
        }
      }
    `}</style>
  );
} 