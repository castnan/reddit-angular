// search.component.ts
import { Component, NgZone } from '@angular/core';
import { RedditService } from '../../services/reddit.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = 'FullDev';

  constructor(
    private toastr: ToastrService,
    private redditService: RedditService,
    private router: Router,
    private sharedDataService: SharedDataService,
    private zone: NgZone,
  ) {}

  search() {
    if (this.searchQuery.trim() !== '') {
      this.redditService.searchSubreddit(this.searchQuery).subscribe({
        next: (result) => {
          this.sharedDataService.updateSearchData(result.data.children);
          this.router.navigate(['/feed-main']);
        },
        error: (error) => {
          this.toastr.error('Ocorreu um erro durante a pesquisa. Tente novamente.', 'Erro');        }
      });
    }
  }
  startListening(): void {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();

      recognition.onresult = (event: any) => {
        this.zone.run(() => {
          const transcription = event.results[0][0].transcript;
          this.searchQuery = transcription;
        });
      };
      this.searchQuery = '';
      recognition.start();
    } else {
      this.toastr.error('A API de reconhecimento de fala não é suportada neste navegador.', 'Erro');
    }
  }
  isMicrophoneMuted: boolean = true;

  toggleMicrophone(): void {
    this.isMicrophoneMuted = !this.isMicrophoneMuted;

    // Adicione aqui a lógica para lidar com o estado do microfone
    if (this.isMicrophoneMuted) {
      // Microfone mutado, faça algo...
    } else {
      // Microfone não mutado, faça algo diferente...
    }
  }
}
