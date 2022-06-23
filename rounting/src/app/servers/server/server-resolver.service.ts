import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";

interface Server {
  id: Number;
  name: String;
  status: String;
}
@Injectable()
export class ServerResolverService implements Resolve<Server> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Server | Observable<Server> | Promise<Server> {
    return this.serverServices.getServer(+route.params["id"]);
  }
  constructor(private serverServices: ServersService) {}
}
