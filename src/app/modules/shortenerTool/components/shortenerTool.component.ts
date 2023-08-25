import {Component, OnDestroy, OnInit} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {getShortenerUrlsAction} from "../store/actions/shortenerTool.actions";
import {Subject, takeUntil} from "rxjs";
import {shortenedLinksSelector} from "../store/shortenerTool.selectors";
import {LinkItemInterface} from "../store/interfaces/initialState.interface";

@Component({
  selector: "shortener-tool",
  templateUrl: "./shortenerTool.component.html",
  styleUrls: ["./shortenerTool.component.scss"]
})
export class ShortenerToolComponent implements OnInit, OnDestroy {
  public url: string = ""
  public links: LinkItemInterface[] = []
  public destroyed$: Subject<void> = new Subject<void>()

  constructor(
    private readonly store: Store
  ) {
  }

  public ngOnInit(): void {
    this.initializeListeners()
  }

  public ngOnDestroy(): void {
    this.destroyed$.unsubscribe()
  }

  public initializeListeners(): void {
    this.store.pipe(select(shortenedLinksSelector), takeUntil(this.destroyed$)).subscribe((links: LinkItemInterface[]) => {
      this.links = links
    })
  }


  public getShortenerUrlsByUrl(): void {
    this.store.dispatch(getShortenerUrlsAction({url: this.url}))
    this.url = ""
  }
}
