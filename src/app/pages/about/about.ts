
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  name: string = 'Harini G';

  role: string = 'Full Stack Developer';

  description: string =
    'I am a Computer Science Engineering student passionate about building full-stack web applications and integrating intelligent technologies into meaningful digital solutions.';

  journey = [
    {
      year: '2023',
      title: 'Started My Engineering Journey',
      description: 'Began B.E. Computer Science and Engineering at PSNA College of Engineering and Technology.'
    },
    {
      year: '2024',
      title: 'Python Development',
      description: 'Started gaining practical experience in Python development and backend automation.'
    },
    {
      year: '2025',
      title: 'Exploring Full Stack Development',
      description: 'Worked on data science, web development, internships and real-world projects.'
    },
    {
      year: '2026',
      title: 'Building Real-World Applications',
      description: 'Focused on full-stack applications, cloud technologies and AI-powered solutions.'
    },
    {
      year: '2027',
      title: 'Engineering Graduation',
      description: 'Expected graduation in Computer Science and Engineering.'
    }
  ];

  strengths = [
    {
      icon: 'bi bi-lightbulb',
      title: 'Problem Solving',
      description: 'Enjoy solving technical challenges through logical thinking.'
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Technical Learning',
      description: 'Continuously exploring new tools and technologies.'
    },
    {
      icon: 'bi bi-people',
      title: 'Team Collaboration',
      description: 'Comfortable collaborating and sharing ideas.'
    },
    {
      icon: 'bi bi-palette',
      title: 'Creative Thinking',
      description: 'Interested in building user-friendly digital experiences.'
    }
  ];

}
