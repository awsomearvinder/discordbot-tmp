{
  description = "discord bot for pcparadise";
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachSystem [ "x86_64-linux" ] (system:
      let pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShell = (pkgs.mkShell {
          nativeBuildInputs =
            [ pkgs.nodejs-16_x pkgs.nodePackages.typescript-language-server ];
          /* We want to use the npm lock-file as much as possible.
             Not everyone uses nix. Everyone uses npm.
          */
          buildInputs = [ ];
          shellHook = ''
            export PATH=$PATH:./node_modules/.bin
          '';
        });
      });
}
